import { Injectable } from "@angular/core";
import { User } from "app/entity/user";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  url =  "http://localhost:8081";
  //  = [
  //   { name: 'cucu', age: 18, address: 'USA' },
  //   { name: 'xuxu', age: 19, address: 'China' },
  //   { name: 'dudu', age: 20, address: 'India' }
  // ];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    console.log("userservice.getUsers() this.url = " + this.url);
    return this.http.get<User[]>(this.url + "/users");
  }

  test(): Observable<String> {
    return this.http
      .get<String>(this.url + "/test")
      .pipe(tap(() => console.log("UserService.test()")));
  }

  addUser(user: User): Observable<User> {
    console.log("userservice.addUser() this.url = " + this.url);

    return this.http
      .post<User>(this.url + "/user", user)
      .pipe(tap(() => console.log("UserService.addUser()")));
  }

  /** GET heroes from the server */
  // getHeroes (): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  //     .pipe(
  //       tap(heroes => this.log('fetched heroes')),
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }
}
