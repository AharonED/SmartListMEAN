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
  groupsPerPage = 10;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private groupsSub: Subscription;

  filterByTitle : boolean=true;
  filterByDesc : boolean=true;
  filterValue: string;
  groupsAll: Group[] = [];
 
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
        this.groupsAll = groupData.groups;
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


  applyFilter(filterValue: string) {
    //console.log("filter: " + filterValue);    
    //console.log(this.filterByTitle);
    //console.log(this.filterByDesc);
    
    if(filterValue=="")
      this.groups = this.groupsAll;
    else
      this.groups = this.groupsAll.filter(
        //this.filter
          (group: Group) => 
          (
            ((this.filterByTitle==true) && group.title.trim().toLowerCase() == filterValue.trim().toLowerCase())
          ||
          ((this.filterByDesc==true) && group.description.trim().toLowerCase() == filterValue.trim().toLowerCase())
          ) 
          
        );


    //if (this.dataSource.paginator) {
    //  this.dataSource.paginator.firstPage();
    //}
  }

  applyFilterType(checked:boolean, filterValue:string, type:string){

    //console.log("checked=" + checked);
    //console.log("filterValue=" + filterValue);
    //console.log("type=" + type);

    if(type=="filterByTitle")
      this.filterByTitle=checked;
      if(type=="filterByDesc")
      this.filterByDesc=checked;
      
    this.applyFilter(filterValue);
  }

  ngOnDestroy() {
    this.groupsSub.unsubscribe();
  }
}
