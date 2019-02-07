import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Checklist } from "../Model/checklist.model";
import { group } from "@angular/animations";

@Injectable({ providedIn: "root" })
export class ChecklistsService {
  private checklists: Checklist[] = [];
  private checklistsUpdated = new Subject<{ checklists: Checklist[]; checklistCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getChecklists(checklistsPerPage: number, currentPage: number, group: string, filter:string="") {
    const queryParams = `?pagesize=${checklistsPerPage}&page=${currentPage}&group=${group}&filter=${filter}`;
  //console.log(filter);
    this.http
      .get<{ message: string; checklists: any; maxChecklists: number }>(
        "http://localhost:3000/api/checklists" + queryParams
      )
      .pipe(
        map(checklistData => {
          return {
            checklists: checklistData.checklists.map(checklist => {
              return {
                id: checklist._id,
                title: checklist.title,
                description: checklist.description,
                imagePath: checklist.imagePath,
                group: checklist.group
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
      group : string;
      checklistItems: [string];
    }>("http://localhost:3000/api/checklists/" + id);
  }

  addChecklist(title: string, description: string, image: File , group: string) {
    const checklistData = new FormData();
    checklistData.append("title", title);
    checklistData.append("description", description);
    checklistData.append("image", image, title);
    checklistData.append("group", group);
    //console.log(group);
    //checklistData.append("checklistItems",checklistItems);
    this.http
      .post<{ message: string; checklist: Checklist }>(
        "http://localhost:3000/api/checklists",
        checklistData
      )
      .subscribe(responseData => {
        //this.router.navigate(["/checklist-list/" + group]);
        this.router.navigate(["/group-edit/" + group]);
      });
  }

  updateChecklist(id: string, title: string, description: string, image: File | string, group: string, checklistItems: [string]) {
    let checklistData: Checklist | FormData;
    if (typeof image === "object") {
      checklistData = new FormData();
      checklistData.append("id", id);
      checklistData.append("title", title);
      checklistData.append("description", description);
      checklistData.append("image", image, title);
      checklistData.append("group", group);
    //checklistData.append("checklistItems",checklistItems);
    } else {
      checklistData = {
        id: id,
        title: title,
        description: description,
        imagePath: image,
        group: group,
        checklistItems: checklistItems
      };
    }
    this.http
      .put("http://localhost:3000/api/checklists/" + id, checklistData)
      .subscribe(response => {
        this.router.navigate(["/group-edit/" + group]);
        //this.router.navigate(["/checklist-list/" + group]);
      });
  }

  deleteChecklist(checklistId: string) {
    return this.http
      .delete("http://localhost:3000/api/checklists/" + checklistId);
  }
}
