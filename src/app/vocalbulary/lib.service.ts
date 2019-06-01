import { Injectable } from "@angular/core";
import { Observable, forkJoin } from "rxjs";
import { Vocalbulary } from "./vocalbulary";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { MyVocalbulary } from "./myVocalbulary";
// import 'rxjs/add/operator/map';
// import { forkJoin } from 'rxjs/add/observable/forkJoin';

@Injectable({
  providedIn: "root"
})
export class LibService {
  // public LIBRARY: Vocalbulary[] = [];
  // public MYLIBRARY: MyVocalbulary[] = [];

  public LIBRARY;
  public MYLIBRARY;

  constructor(private http: HttpClient) {
    // this.getLib().subscribe(function(lib) {
    //   this.LIBRARY = lib;
    //   console.log("this.LIBRARY = " + JSON.stringify(this.LIBRARY));
    // });

    // this.LIBRARY = this.http.get<Vocalbulary[]>("http://localhost:8081/vocalbulary");

    // this.MYLIBRARY = this.http.get<MyVocalbulary[]>(
    //   "http://localhost:8081/myvocalbulary"
    // );

    this.LIBRARY = this.http.get("http://localhost:8081/vocalbulary");

    this.MYLIBRARY = this.http.get("http://localhost:8081/myvocalbulary");

    // forkJoin([lib, mylib]).subscribe(result => {
    //   this.LIBRARY = result[0];
    //   this.MYLIBRARY = result[1];
    // });
  }

  // getLib(): Observable<Vocalbulary[]> {
  //   return this.http.get<Vocalbulary[]>("http://localhost:8081/vocalbulary");
  //   // .pipe(
  //   //   tap(function(l) {
  //   //     this.LIBRARY = l;
  //   //     console.log("LibService.LIBRARY = " + JSON.stringify(this.LIBRARY));
  //   //   })
  //   // );
  // }

  // getMyLib(): Observable<MyVocalbulary[]> {
  //   return this.http.get<MyVocalbulary[]>(
  //     "http://localhost:8081/myvocalbulary"
  //   );
  //   // .pipe(
  //   //   tap(ml => {
  //   //     this.MYLIBRARY = ml;
  //   //   })
  //   // )
  // }
}
