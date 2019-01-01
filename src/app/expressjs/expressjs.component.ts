import { Component, OnInit } from '@angular/core';
import { TestServiceService } from 'app/service/test-service.service';

@Component({
  selector: 'app-expressjs',
  templateUrl: './expressjs.component.html',
  styleUrls: ['./expressjs.component.css']
})
export class ExpressjsComponent implements OnInit {
  name = 'Cucu';
  sayHello = '';
  testReturn = '';
  test: TestServiceService ;

  constructor(testSvs: TestServiceService) {
    this.test = testSvs;
  }

  ngOnInit() {
    this.sayHello = this.test.sayHello(this.name);
  }

  submitTestForm() {

  }
}
