import { Component, OnInit, OnDestroy, Input, Output } from "@angular/core";
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
            });
      
        });      
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
