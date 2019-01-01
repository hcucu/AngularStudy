import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  sayHello(name) {
    console.log('Hello');
    return 'Hello ' + name;
  }
}
