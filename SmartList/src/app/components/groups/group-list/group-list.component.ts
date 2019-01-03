import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";

import { Group } from "../../../Model/group.model";
import { GroupsService } from "../../../services/groups.service";

@Component({
  selector: "app-group-list",
  templateUrl: "./group-list.component.html",
  styleUrls: ["./group-list.component.css"]
})
export class GroupListComponent implements OnInit, OnDestroy {

  groups: Group[] = [];
  isLoading = false;
  totalGroups = 0;
  groupsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private groupsSub: Subscription;

  constructor(public groupsService: GroupsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
    this.groupsSub = this.groupsService
      .getGroupUpdateListener()
      .subscribe((groupData: {groups: Group[], groupCount: number}) => {
        this.isLoading = false;
        this.totalGroups = groupData.groupCount;
        this.groups = groupData.groups;
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.groupsPerPage = pageData.pageSize;
    this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
  }

  onDelete(groupId: string) {
    this.isLoading = true;
    this.groupsService.deleteGroup(groupId).subscribe(() => {
      this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
    });
  }

  ngOnDestroy() {
    this.groupsSub.unsubscribe();
  }
}
