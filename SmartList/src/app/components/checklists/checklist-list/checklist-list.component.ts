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
  
  isLoading = false;
  totalChecklists = 0;
  checklistsPerPage = 10;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private checklistsSub: Subscription;

 filterByTitle : boolean=true;
 filterByDesc : boolean=true;
 filterValue: string;
 checklistsAll: Checklist[] = [];

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
      
          //console.log("this.groupId - list" + this.groupId);

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
    //this.checklistsService.getChecklists(this.checklistsPerPage, this.currentPage, this.groupId);
    this.applyFilter(this.filterValue);
  }

  onDelete(checklistId: string) {
    this.isLoading = true;
    this.checklistsService.deleteChecklist(checklistId).subscribe(() => {
      this.checklistsService.getChecklists(this.checklistsPerPage, this.currentPage, this.groupId);
    });
  }

  applyFilter(filterValue) {
    ////console.log("filter: " + filterValue);    
    ////console.log(this.filterByTitle);
    ////console.log(this.filterByDesc);
/*
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
            ||
            ((this.filterByImage==true) && group.imagePath.trim().toLowerCase().indexOf(filterValue.trim().toLowerCase())>0)
          ) 
        );

*/


//12. To do an or check with multiple keys use $or
//db.testdb.find({"$or" : [{"status" : "dropout"}, {"gpa" : {"$lt" : 3.0}}]}, {"name" : 1, "_id" : 0})
 
  this.filterValue=filterValue;
  var filterarr:string [] =[];
  var filter : string;
    if(filterValue=="")
      this.checklists = this.checklistsAll;
    else
    {
      if ((this.filterByTitle==true) )
      filterarr.push('{"title" : "' + filterValue + '"}');
      if ((this.filterByDesc==true) )
      filterarr.push('{"description" : "' + filterValue + '"}');
      //if ((this.filterByImage==true) )
      //filterarr.push('{"imagePath" : "' + filterValue + '"}');
    } 
    if(filterarr.length>0)
    {
      filter = filterarr.join(",");
      filter = '{"$or" : [' + filter + ']}';
      this.checklistsService.getChecklists(this.checklistsPerPage, this.currentPage, this.groupId,filter);
    }
    else
      this.checklistsService.getChecklists(this.checklistsPerPage, this.currentPage, this.groupId);

 

    //if (this.dataSource.paginator) {
    //  this.dataSource.paginator.firstPage();
    //}
  }

  applyFilterType(checked:boolean, filterValue:string, type:string){

    ////console.log("checked=" + checked);
    ////console.log("filterValue=" + filterValue);
    ////console.log("type=" + type);

    if(type=="filterByTitle")
      this.filterByTitle=checked;
      if(type=="filterByDesc")
      this.filterByDesc=checked;
      //if(type=="filterByImage")
      //this.filterByImage=checked;

      this.filterValue=filterValue;

      this.applyFilter(this.filterValue);
  }

  ngOnDestroy() {
    this.checklistsSub.unsubscribe();
  }
}
