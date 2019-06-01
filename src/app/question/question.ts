import { MyVocalbulary } from "app/vocalbulary/myVocalbulary";
// import { Vocalbulary } from "app/vocalbulary/vocalbulary";
import { Option } from "./option";

export class Question {
  word: MyVocalbulary;
  options: Option[];
  isNotSure: boolean;
  userAnswer: number;
  isCorrect: boolean;

  constructor(v?: MyVocalbulary, o?: Option[]) {
    this.word = v;
    this.options = o;
    this.userAnswer = -1;
    this.isCorrect = false;
    this.isNotSure = false;

    // this.question = new MyVocalbulary(new Vocalbulary("hello", "你好"));
    // // this.question.vocalbulary.w
    // this.options = [
    //   new Vocalbulary("weather", "天气"),
    //   new Vocalbulary("sun","太阳"),
    //   new Vocalbulary("good", "好"),
    //   this.question.vocalbulary
    // ]
  }
}
