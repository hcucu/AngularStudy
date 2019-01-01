import { Component, OnInit } from "@angular/core";
import { UserService } from "../service/user.service";
// import { MatListModule } from '@angular/material/list';
import { User } from "../entity/user";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  users: User[];
  test: String;
  addUserForm: FormGroup = this.formBuilder.group({
    username: ["", Validators.required],
    age: ["", [Validators.min(18), Validators.max(25)]],
    address: [""]
  });
  // username: FormControl;
  // age: FormControl;
  // address: FormControl;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.userService.test().subscribe(test => {
      this.test = test;
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  addUser() {
    this.userService
      .addUser(
        new User(
          this.addUserForm.value["username"],
          this.addUserForm.value["age"],
          this.addUserForm.value["address"]
        )
      )
      .subscribe(result => {
        console.log(result);
      });
  }
}
