import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Group } from "./../Model/group.model";

@Injectable({ providedIn: "root" })
export class GroupsService {
  private groups: Group[] = [];
  private groupsUpdated = new Subject<{ groups: Group[]; groupCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getGroups(groupsPerPage: number, currentPage: number, filter:string="") {
    const queryParams = `?pagesize=${groupsPerPage}&page=${currentPage}&filter=${filter}`;
    //console.log("pagesize=${groupsPerPage}" + groupsPerPage);
    this.http
      .get<{ message: string; groups: any; maxGroups: number }>(
        "http://localhost:3000/api/groups" + queryParams
      )
      .pipe(
        map(groupData => {
          return {
            groups: groupData.groups.map(group => {
              return {
                title: group.title,
                description: group.description,
                id: group._id,
                imagePath: group.imagePath,
                checklist: null
              };
            }),
            maxGroups: groupData.maxGroups
          };
        })
      )
      .subscribe(transformedGroupData => {
        this.groups = transformedGroupData.groups;
        this.groupsUpdated.next({
          groups: [...this.groups],
          groupCount: transformedGroupData.maxGroups
        });
      });
  }

  getGroupUpdateListener() {
    return this.groupsUpdated.asObservable();
  }

  getGroup(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      description: string;
      imagePath: string;
    }>("http://localhost:3000/api/groups/" + id);
  }

  addGroup(title: string, description: string, image: File) {
    const groupData = new FormData();
    groupData.append("title", title);
    groupData.append("description", description);
    groupData.append("image", image, title);
    this.http
      .post<{ message: string; group: Group }>(
        "http://localhost:3000/api/groups",
        groupData
      )
      .subscribe(responseData => {
        this.router.navigate(["/group-list"]);
      });
  }

  updateGroup(id: string, title: string, description: string, image: File | string) {
    let groupData: Group | FormData;
    if (typeof image === "object") {
      groupData = new FormData();
      groupData.append("id", id);
      groupData.append("title", title);
      groupData.append("description", description);
      groupData.append("image", image, title);
    } else {
      groupData = {
        id: id,
        title: title,
        description: description,
        imagePath: image
      };
    }
    this.http
      .put("http://localhost:3000/api/groups/" + id, groupData)
      .subscribe(response => {
        this.router.navigate(["/group-list"]);
      });
  }

  deleteGroup(groupId: string) {
    return this.http
      .delete("http://localhost:3000/api/groups/" + groupId);
  }
}
