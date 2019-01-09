import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { Group } from "./../Model/group.model";

@Injectable({ providedIn: "root" })
export class GroupsHLLService {
  private groups: Group[] = [];
  private groupsUpdated = new Subject<{ groups: Group[]; groupCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getGroupHLL() {
    return this.http.get<{
      data: number;
      //title: string;
      //description: string;
      //imagePath: string;
    }>("http://localhost:3000/api/groupsHLL/" );
  }

}
