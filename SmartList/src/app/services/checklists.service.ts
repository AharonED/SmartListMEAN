import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Checklist } from "../Model/checklist.model";

@Injectable({ providedIn: "root" })
export class ChecklistsService {
  private checklists: Checklist[] = [];
  private checklistsUpdated = new Subject<{ checklists: Checklist[]; checklistCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getChecklists(checklistsPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${checklistsPerPage}&page=${currentPage}`;
    this.http
      .get<{ message: string; checklists: any; maxChecklists: number }>(
        "http://localhost:3000/api/checklists" + queryParams
      )
      .pipe(
        map(checklistData => {
          return {
            checklists: checklistData.checklists.map(checklist => {
              return {
                title: checklist.title,
                description: checklist.description,
                id: checklist._id,
                imagePath: checklist.imagePath
              };
            }),
            maxChecklists: checklistData.maxChecklists
          };
        })
      )
      .subscribe(transformedChecklistData => {
        this.checklists = transformedChecklistData.checklists;
        this.checklistsUpdated.next({
          checklists: [...this.checklists],
          checklistCount: transformedChecklistData.maxChecklists
        });
      });
  }

  getChecklistUpdateListener() {
    return this.checklistsUpdated.asObservable();
  }

  getChecklist(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      description: string;
      imagePath: string;
    }>("http://localhost:3000/api/checklists/" + id);
  }

  addChecklist(title: string, description: string, image: File) {
    const checklistData = new FormData();
    checklistData.append("title", title);
    checklistData.append("description", description);
    checklistData.append("image", image, title);
    this.http
      .post<{ message: string; checklist: Checklist }>(
        "http://localhost:3000/api/checklists",
        checklistData
      )
      .subscribe(responseData => {
        this.router.navigate(["/checklist-list"]);
      });
  }

  updateChecklist(id: string, title: string, description: string, image: File | string) {
    let checklistData: Checklist | FormData;
    if (typeof image === "object") {
      checklistData = new FormData();
      checklistData.append("id", id);
      checklistData.append("title", title);
      checklistData.append("description", description);
      checklistData.append("image", image, title);
    } else {
      checklistData = {
        id: id,
        title: title,
        description: description,
        imagePath: image
      };
    }
    this.http
      .put("http://localhost:3000/api/checklists/" + id, checklistData)
      .subscribe(response => {
        this.router.navigate(["/checklist-list"]);
      });
  }

  deleteChecklist(checklistId: string) {
    return this.http
      .delete("http://localhost:3000/api/checklists/" + checklistId);
  }
}
