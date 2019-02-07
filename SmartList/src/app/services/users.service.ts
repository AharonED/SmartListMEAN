import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { User } from "../Model/user";

@Injectable({ providedIn: "root" })
export class UsersService {
  private users: User[] = [];
  private usersUpdated = new Subject<{ users: User[]; userCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  getUsers(usersPerPage: number, currentPage: number, filter:string="") {
    const queryParams = `?pagesize=${usersPerPage}&page=${currentPage}&filter=${filter}`;
    this.http
      .get<{ message: string; users: any; maxUsers: number }>(
        "http://localhost:3000/api/users" + queryParams
      )
      .pipe(
        map(userData => {
          //console.log(userData);

          return {
            users: userData.users.map(user => {
              //console.log(user);
              return {
                email: user.email,
                address: user.address,
                longitude: user.location[0],
                latitude: user.location[1]
              };
            }),
            maxUsers: userData.maxUsers
          };
        })
      )
      .subscribe(transformedUserData => {
        this.users = transformedUserData.users;
        this.usersUpdated.next({
          users: [...this.users],
          userCount: transformedUserData.maxUsers
        });
      });
  }

  getUserUpdateListener() {
    return this.usersUpdated.asObservable();
  }

  getUser(id: string) {
    return this.http.get<{
      _id: string;
      email: string;
      address: string;
      longitude: string;
      latitude: string;
    }>("http://localhost:3000/api/users/" + id);
  }

  addUser(email: string, password:string, address: string, longitude: number, latitude: number) {

    //console.log("m:" + email + "p:" + password + "ad:" + address+ "long:"+  (longitude+"") + (latitude+""));

    const userData = new FormData();
    userData.append("username", email);
    userData.append("password", password);
    userData.append("email", email);
    userData.append("address", address);
    userData.append("longitude", longitude + "");
    userData.append("latitude", latitude + "" );
    this.http
      .post<{ message: string; userData: User }>(
        "http://localhost:3000/api/users",
        userData
      )
      .subscribe(responseData => {
        this.router.navigate(["/group-list"]);
      });
  }
}
