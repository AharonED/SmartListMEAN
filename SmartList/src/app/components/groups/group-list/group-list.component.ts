import { Component, OnInit, OnDestroy } from "@angular/core";
import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";

import { Group } from "../../../Model/group.model";
import { GroupsService } from "../../../services/groups.service";
import { stratify } from "d3";
import { stringify } from "@angular/core/src/render3/util";

@Component({
  selector: "app-group-list",
  templateUrl: "./group-list.component.html",
  styleUrls: ["./group-list.component.css"]
})
export class GroupListComponent implements OnInit, OnDestroy {
  GroupsCount : number=1;

  groups: Group[] = [];
  isLoading = false;
  totalGroups = 0;
  groupsPerPage = 10;
  currentPage = 1;
  pageSizeOptions = [10, 20, 50, 100];
  private groupsSub: Subscription;

  filterByTitle : boolean=true;
  filterByDesc : boolean=true;
  filterByImage : boolean=true;
  filterValue: string;
//  groupsAll: Group[] = [];
 
  constructor(public groupsService: GroupsService) {
    this.groups = [];
  }

  ngOnInit() {
    this.isLoading = true;
    //this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
console.log("ngOnInit");
console.log("totalGroups = " + (this.totalGroups + ""));
console.log("  groupsPerPage = " + (this.groupsPerPage + ""));
console.log("  currentPage = " + (this.currentPage + ""));

    this.groupsSub = this.groupsService
      .getGroupUpdateListener()
      .subscribe((groupData: {groups: Group[], groupCount: number}) => {
        this.isLoading = false;
        this.totalGroups = groupData.groupCount;
        this.groups = groupData.groups;
//        this.groupsAll = groupData.groups;
        console.log("subscribe");

      });

      this.applyFilter("");
  }

  onChangedPage(pageData: PageEvent) {
    console.log("  onChangedPage");

    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.groupsPerPage = pageData.pageSize;
    //this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
    this.applyFilter(this.filterValue);
  }

  onDelete(groupId: string) {
    this.isLoading = true;
    this.groupsService.deleteGroup(groupId).subscribe(() => {
      this.groupsService.getGroups(this.groupsPerPage, this.currentPage);
    });
  }


  applyFilter(filterValue) {
  this.filterValue=filterValue;
  var filterarr:string [] =[];
  var filter : string;
    if(filterValue!="")
    {
      if ((this.filterByTitle==true) )
      filterarr.push('{"title" : "' + filterValue + '"}');
      if ((this.filterByDesc==true) )
      filterarr.push('{"description" : "' + filterValue + '"}');
      if ((this.filterByImage==true) )
      filterarr.push('{"imagePath" : "' + filterValue + '"}');
    } 

//-*/*/*/*/ 
//When calling to service, and applying filter - the service invoke the 
//getGroupUpdateListener 
//and update all local data memebers: 
//this.groups and this.groupsAll

    if(filterarr.length>0)
    {
      filter = filterarr.join(",");
      filter = '{"$or" : [' + filter + ']}';
      this.groupsService.getGroups(this.groupsPerPage, this.currentPage,filter);
    }
    else
      this.groupsService.getGroups(this.groupsPerPage, this.currentPage);

 

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
      if(type=="filterByImage")
      this.filterByImage=checked;

      this.filterValue=filterValue;

      this.applyFilter(this.filterValue);
  }

  ngOnDestroy() {
    this.groupsSub.unsubscribe();
    console.log("ngOnDestroy");
  }
}
