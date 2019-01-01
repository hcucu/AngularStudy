import { Component, OnInit } from "@angular/core";
import { forEach } from "@angular/router/src/utils/collection";
import { stringify } from "@angular/core/src/util";
import { isNumber } from "util";

@Component({
  selector: "app-javascript-practice",
  templateUrl: "./javascript-practice.component.html",
  styleUrls: ["./javascript-practice.component.css"]
})
export class JavascriptPracticeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // reverse a string
  reverseString(x: string): string {
    // return x.split('').reverse().reduce((s , v) => s + v );
    return x
      .split("")
      .reverse()
      .join("");
  }

  // reverse a number
  reverseNumber(x: number): number {
    // const reverse_string_array = x.toString().split('').reverse();

    // for (let i = 0; i < reverse_string_array.length; i++){
    //   s = s + reverse_string_array[i];
    // }

    // let ss = Array.from(s);
    // console.log (reverse_string);
    return parseInt(this.reverseString(x.toString()), 10);
  }

  // trim all space
  trimAllSpace(s: string) {
    // const ss = s
    //   .split("")
    //   .filter(x => (x != " "))
    //   .join();
    // console.log(ss);
    return s
      .split("")
      .filter(x => x != " ")
      .join();
  }

  // checks whether a passed string is palindrome or not
  isPalindrome(s: string, countSpace = true): boolean {
    return countSpace
      ? s === this.reverseString(s)
        ? true
        : false
      : this.trimAllSpace(s) === this.reverseString(this.trimAllSpace(s))
        ? true
        : false;
  }

  // generates all combinations of a string
  getStringArrayCombination(s: string, arr: Array<string>): Array<string> {
    // const charArray = s.split("");
    // let newArray = Array<string>();
    // if (charArray.length == 2) {
    //   if (charArray[0] == charArray[1])  {
    //     newArray[0] = charArray[0] + charArray[1];
    //   } else {
    //     newArray[0] = charArray[0] + charArray[1];
    //   newArray[1] = charArray[1] + charArray[0];
    //   };
    // }
    // if (newArray[0] == newArray[1]) {
    //   returen new Array (newArray[0]);
    // }
    return null;
  }

  // take the num parameter being passed and return the factorial of it
  FirstFactorial(num): number {
    let s = 1;
    if (isNumber(num) == true && num > 1 && num < 18 && num % 1 === 0) {
      for (let i = num; i > 0; i--) {
        s = s * i;
      }
      return s;
    } else {
      return -1;
    }
  }
}
