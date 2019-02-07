import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { ChecklistItem } from "../Model/checklistItem.model";
import { group } from "@angular/animations";

@Injectable({ providedIn: "root" })
export class ChecklistItemsService {
  private checklistItems: ChecklistItem[] = [];
  private checklistItemsUpdated = new Subject<{ checklistItems: ChecklistItem[]; checklistItemsCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getChecklistItems(checklistItemsPerPage: number, currentPage: number, checklistId: string) {
    const queryParams = `?pagesize=${checklistItemsPerPage}&page=${currentPage}&checklistId=${checklistId}`;
    console.log(checklistId);
    this.http
      .get<{ message: string; checklistItems: any; maxChecklistItems: number }>(
        "http://localhost:3000/api/checklistItems" + queryParams
      )
      .pipe(
        map(checklistItemsData => {
          return {
            checklistItems: checklistItemsData.checklistItems.map(checklistItems => {
              console.log("checklistItems.isDone" + checklistItems.isDone);

              return {
                id: checklistItems._id,
                title: checklistItems.title,
                description: checklistItems.description,
                imagePath: checklistItems.imagePath,
                checklistId: checklistItems.checklistId,
                isDone: checklistItems.isDone
              };
            }),
            maxChecklistItems: checklistItemsData.maxChecklistItems
          };
        })
      )
      .subscribe(transformedChecklistItemsData => {
        this.checklistItems = transformedChecklistItemsData.checklistItems;
        this.checklistItemsUpdated.next({
          checklistItems: [...this.checklistItems],
          checklistItemsCount: transformedChecklistItemsData.maxChecklistItems
        });
      });
  }

  getChecklistItemsUpdateListener() {
    return this.checklistItemsUpdated.asObservable();
  }

  getChecklistItem(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      description: string;
      imagePath: string;
      checklistId : string;
      isDone: boolean;
    }>("http://localhost:3000/api/checklistItems/" + id);
  }

  addChecklistItems(title: string, description: string, image: File , checklistId: string, isDone: boolean) {
    const checklistItemsData = new FormData();
    checklistItemsData.append("title", title);
    checklistItemsData.append("description", description);
    checklistItemsData.append("image", image, title);
    checklistItemsData.append("checklistId", checklistId);
    checklistItemsData.append("isDone", (isDone==true?'true':'false'));
    console.log(checklistId);
    //checklistItemsData.append("checklistItemsItems",checklistItemsItems);
    this.http
      .post<{ message: string; checklistItems: ChecklistItem }>(
        "http://localhost:3000/api/checklistItems",
        checklistItemsData
      )
      .subscribe(responseData => {
        this.router.navigate(["/checklist-edit/" + checklistId]);
        //this.router.navigate(["/checklistItem-list/" + checklistId]);
      });
  }

  updateChecklistItems(id: string, title: string, description: string, image: File | string, checklistId: string, isDone: boolean, redirectToList: boolean = true) {
    let checklistItemsData: ChecklistItem | FormData;
    if (typeof image === "object") {
      checklistItemsData = new FormData();
      checklistItemsData.append("id", id);
      checklistItemsData.append("title", title);
      checklistItemsData.append("description", description);
      checklistItemsData.append("image", image, title);
      checklistItemsData.append("checklistId", checklistId);
      checklistItemsData.append("isDone",  (isDone==true?'true':'false'));
    //checklistItemsData.append("checklistItemsItems",checklistItemsItems);
    } else {
      checklistItemsData = {
        id: id,
        title: title,
        description: description,
        imagePath: image,
        checklistId: checklistId,
        isDone: isDone
      };
      console.log("checklistItemsData.isDone" + checklistItemsData.isDone);
    }
    this.http
      .put("http://localhost:3000/api/checklistItems/" + id, checklistItemsData)
      .subscribe(response => {
        if(redirectToList)
          //this.router.navigate(["/checklistItem-list/" + checklistId]);
          this.router.navigate(["/checklist-edit/" + checklistId]);
      });
  }

  deleteChecklistItems(checklistItemsId: string) {
    return this.http
      .delete("http://localhost:3000/api/checklistItems/" + checklistItemsId);
  }
}
