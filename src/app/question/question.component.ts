import { Component, OnInit, Input, Output } from "@angular/core";
import { MyVocalbulary } from "../vocalbulary/myVocalbulary";
import { Vocalbulary } from "../vocalbulary/vocalbulary";
import { Option } from "./option";
import { Question } from "./question";
import { Exam } from "app/exam/exam";
import { EventEmitter } from "protractor";
import { MessageService } from "app/messages/message.service";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  // @Input() question: Question;
  @Input() index: number;
  @Input() question: Question;
  // @Output() onSelect: EventEmitter = new EventEmitter();
  // options: Option[];
  // isNotSure: boolean;
  // userAnswer: number;
  // isCorrect: boolean;

  constructor(public messageService: MessageService) {}

  ngOnInit() {
    // this.onSelect.emit("string","question component onSelect");
    // this.question = new Question(new MyVocalbulary(new Vocalbulary("hello", "你好")), [
    //   new Option(1, "一"),
    //   new Option(2, "二"),
    //   new Option(3, "三"),
    //   new Option(4, "四")
    // ]);
  }

  onSelectOption() {
    // this.question.userAnswer = optionId;
    // console.log("question.useAnswer = " + this.question.userAnswer);
    this.messageService.add(
      this.index +
        ". " +
        this.question.word.english() +
        ", user answer " +
        this.question.userAnswer
    );
  }
}
