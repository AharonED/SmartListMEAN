import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { ChecklistItem } from "../Model/checklistItem.model";

@Injectable({ providedIn: "root" })
export class ChecklistItemsService {
  private checklistItems: ChecklistItem[] = [];
  private checklistItemsUpdated = new Subject<{ checklistItems: ChecklistItem[]; checklistItemCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getChecklistItems(checklistItemsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${checklistItemsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; checklistItems: any; maxChecklistItems: number }>(
        "http://localhost:3000/api/checklistItems" + queryParams
      )
      .pipe(
        map(checklistItemData => {
          return {
            checklistItems: checklistItemData.checklistItems.map(checklistItem => {
              return {
                id: checklistItem._id,
                title: checklistItem.title,
                description: checklistItem.description,
                imagePath: checklistItem.imagePath,
                group: checklistItem.group,
                checklist: checklistItem.checklist
              };
            }),
            maxChecklistItems: checklistItemData.maxChecklistItems
          };
        })
      )
      .subscribe(transformedChecklistItemData => {
        this.checklistItems = transformedChecklistItemData.checklistItems;
        this.checklistItemsUpdated.next({
          checklistItems: [...this.checklistItems],
          checklistItemCount: transformedChecklistItemData.maxChecklistItems
        });
      });
  }

  getChecklistItemUpdateListener() {
    return this.checklistItemsUpdated.asObservable();
  }

  getChecklistItem(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      description: string;
      imagePath: string;
      group: string;
      checklist: string;
    }>("http://localhost:3000/api/checklistItems/" + id);
  }

  addChecklistItem(title: string, description: string, image: File, group: string, checklist: string) {
    const checklistItemData = new FormData();
    checklistItemData.append("title", title);
    checklistItemData.append("description", description);
    checklistItemData.append("image", image, title);
    checklistItemData.append("group", group);
    checklistItemData.append("checklist", checklist);
this.http
      .post<{ message: string; checklistItem: ChecklistItem }>(
        "http://localhost:3000/api/checklistItems",
        checklistItemData
      )
      .subscribe(responseData => {
        this.router.navigate(["/checklistItem-list"]);
      });
  }

  updateChecklistItem(id: string, title: string, description: string, image: File | string, group: string, checklist: string) {
    let checklistItemData: ChecklistItem | FormData;
    if (typeof image === "object") {
      checklistItemData = new FormData();
      checklistItemData.append("id", id);
      checklistItemData.append("title", title);
      checklistItemData.append("description", description);
      checklistItemData.append("image", image, title);
      checklistItemData.append("group", group);
      checklistItemData.append("checklist", checklist);
      } else {
      checklistItemData = {
        id: id,
        title: title,
        description: description,
        imagePath: image,
        group: group,
        checklist: checklist,
      };
    }
    this.http
      .put("http://localhost:3000/api/checklistItems/" + id, checklistItemData)
      .subscribe(response => {
        this.router.navigate(["/checklistItem-list"]);
      });
  }

  deleteChecklistItem(checklistItemId: string) {
    return this.http
      .delete("http://localhost:3000/api/checklistItems/" + checklistItemId);
  }
}
