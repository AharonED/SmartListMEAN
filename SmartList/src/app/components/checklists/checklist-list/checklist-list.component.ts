import { Component, OnInit, OnDestroy, Input, Output } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";

import { Checklist } from "../../../Model/checklist.model";
import { ChecklistsService } from "../../../services/checklists.service";

import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-checklist-list",
  templateUrl: "./checklist-list.component.html",
  styleUrls: ["./checklist-list.component.css"]
})
export class ChecklistListComponent implements OnInit, OnDestroy {

  //@Input() ChecklistID:number=-1;
  //@Output() ChecklistId: string;

  @Input() groupId: string ='-1';

  checklists: Checklist[] = [];
  checklistsAll: Checklist[] = [];
  
  isLoading = false;
  totalChecklists = 0;
  checklistsPerPage = 10;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private checklistsSub: Subscription;

  constructor(public checklistsService: ChecklistsService,
    public route: ActivatedRoute,) {}

  ngOnInit() {
    this.isLoading = true;

      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has("groupId"))
        {
//          if(this.groupId=="-1") 
            this.groupId = paramMap.get("groupId");
        }
      
          console.log("this.groupId - list" + this.groupId);

          this.checklistsService.getChecklists(this.checklistsPerPage, this.currentPage, this.groupId);
          this.checklistsSub = this.checklistsService
            .getChecklistUpdateListener()
            .subscribe((checklistData: {checklists: Checklist[], checklistCount: number}) => {
              this.isLoading = false;
              this.totalChecklists = checklistData.checklistCount;
              this.checklists = checklistData.checklists;
              this.checklistsAll  = checklistData.checklists;
            });
      
        });      
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.checklistsPerPage = pageData.pageSize;
    this.checklistsService.getChecklists(this.checklistsPerPage, this.currentPage, this.groupId);
  }

  onDelete(checklistId: string) {
    this.isLoading = true;
    this.checklistsService.deleteChecklist(checklistId).subscribe(() => {
      this.checklistsService.getChecklists(this.checklistsPerPage, this.currentPage, this.groupId);
    });
  }

  applyFilter(filterValue: string) {
    if(filterValue=="")
      this.checklists = this.checklistsAll;
    else
      this.checklists = this.checklistsAll.filter( (checklist: Checklist) => checklist.title.trim().toLowerCase() == filterValue.trim().toLowerCase());

    console.log("filter: " + filterValue);    

    //if (this.dataSource.paginator) {
    //  this.dataSource.paginator.firstPage();
    //}
  }

  ngOnDestroy() {
    this.checklistsSub.unsubscribe();
  }
}
