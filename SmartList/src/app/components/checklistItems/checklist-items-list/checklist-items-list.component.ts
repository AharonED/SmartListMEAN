import { Component, OnInit, OnDestroy, Input, Output ,ViewChild} from "@angular/core";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";

import { ChecklistItem } from "../../../Model/checklistItem.model";
import { ChecklistItemsService } from "../../../services/checklistItems.service";

import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-checklistItem-list",
  templateUrl: "./checklist-Items-list.component.html",
  styleUrls: ["./checklist-Items-list.component.css"]
})
export class ChecklistItemsListComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['select', 'title', 'description', 'isDone', 'EDIT', 'DELETE'];

  //@Input() ChecklistItemsID:number=-1;
  //@Output() ChecklistItemsId: string;

  @Input() checklistId: string ='-1';

  checklistItems: ChecklistItem[] = [];
  isLoading = false;
  totalChecklistItems = 0;
  checklistItemsPerPage = 10;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private checklistItemsSub: Subscription;
  dataSource: MatTableDataSource<ChecklistItem>;
  selection = new SelectionModel<ChecklistItem>(true, []);

  constructor(public checklistItemsService: ChecklistItemsService,
    public route: ActivatedRoute,) {}

  ngOnInit() {
    this.isLoading = true;

      this.route.paramMap.subscribe((paramMap: ParamMap) => {
        console.log("paramMap.has(checklistId)" + paramMap.has("checklistId"));
        if (paramMap.has("checklistId"))
        {
//          if(this.checklistId=="-1") 
            this.checklistId = paramMap.get("checklistId");
        }
      
          console.log("this.checklistId - list" + this.checklistId);

          this.checklistItemsService.getChecklistItems(this.checklistItemsPerPage, this.currentPage, this.checklistId);
          this.checklistItemsSub = this.checklistItemsService
            .getChecklistItemsUpdateListener()
            .subscribe((checklistItemsData: {checklistItems: ChecklistItem[], checklistItemsCount: number}) => {
              this.isLoading = false;
              this.totalChecklistItems = checklistItemsData.checklistItemsCount;
              this.checklistItems = checklistItemsData.checklistItems;
              this.dataSource = new MatTableDataSource(this.checklistItems);
            });
        });      
           // this.dataSource.paginator = this.paginator;
           // this.dataSource.sort = this.sort;            
  }

  

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  if(this.isAllSelected() )
      {
        this.selection.clear();
        this.dataSource.data.forEach(row => 
          {
            this.selection.select(row);
            row.isDone=false;
            this.checklistItemsService.updateChecklistItems(
              row.id,
              row.title,
              row.description,
              row.imagePath,
              row.checklistId ,
              row.isDone, false       
              );
            }
          );
        }
      else
      {
        this.dataSource.data.forEach(row => 
        {
          this.selection.select(row);
          row.isDone=true;
          this.checklistItemsService.updateChecklistItems(
            row.id,
            row.title,
            row.description,
            row.imagePath,
            row.checklistId ,
            row.isDone, false       
            );
          }
        );
      }
}

toggle(row: ChecklistItem) {
        this.selection.toggle(row);
        console.log("row.isDone" + row.isDone)
        row.isDone= !row.isDone;
        this.checklistItemsService.updateChecklistItems(
          row.id,
          row.title,
          row.description,
          row.imagePath,
          row.checklistId ,
          row.isDone, false       
          );
          console.log("togle " + row.isDone);
}

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.checklistItemsPerPage = pageData.pageSize;
    this.checklistItemsService.getChecklistItems(this.checklistItemsPerPage, this.currentPage, this.checklistId);
  }

  onDelete(checklistItemsId: string) {
    this.isLoading = true;
    this.checklistItemsService.deleteChecklistItems(checklistItemsId).subscribe(() => {
      this.checklistItemsService.getChecklistItems(this.checklistItemsPerPage, this.currentPage, this.checklistId);
    });
  }

  ngOnDestroy() {
    this.checklistItemsSub.unsubscribe();
  }
}
