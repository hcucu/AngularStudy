import { Component, OnInit } from "@angular/core";
import { Exam } from "./exam";
import { ExamService } from "./exam.service";
import { MessageService } from "app/messages/message.service";
import { LibService } from "app/vocalbulary/lib.service";
import { Vocalbulary } from "app/vocalbulary/vocalbulary";
import { MyVocalbulary } from "app/vocalbulary/myVocalbulary";
import { Question } from "app/question/question";
import { Option } from "app/question/option";
import { forkJoin } from "rxjs";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ExamResultDialogComponent } from "./exam-result-dialog/exam-result-dialog.component";


@Component({
  selector: "app-exam",
  templateUrl: "./exam.component.html",
  // template: `
  //   <p>Post Detail Info</p>
  //   <ul>
  //     <li>{{lib | json}}</li>
  //     <li>{{mylib | json}}</li>
  //     <li>{{exam | json}}</li>
  //   </ul>
  // `,
  styleUrls: ["./exam.component.css"]
})

export class ExamComponent implements OnInit {
  exam: Exam;
  // questions: Question[];
  testDate: Date;

  lib: any[];
  mylib: any[];

  constructor(
    private examService: ExamService,
    public messageService: MessageService,
    public libService: LibService,
    public resultDialog: MatDialog
  ) {}

  ngOnInit() {
    forkJoin([this.libService.LIBRARY, this.libService.MYLIBRARY]).subscribe(result => {
      this.lib = result[0];
      this.mylib = result[1];

      let questions = [];

      for (let i = 0; i < this.mylib.length - 1; i++) {

        let l = this.mylib[i];

        let q = new Question(
          new MyVocalbulary(
            new Vocalbulary(l.english, l.chinese)
          )
        );
        // q.word = this.mylib[i];

        // console.log("l = " + JSON.stringify(l));

        let opt: Option[] = [];

        for (let j = 0; j < 4; j++) {
          let idx = this.getRandom(0, 30);
          opt.push(new Option(j, this.lib[idx].chinese));
        }

        const answerIdx = this.getRandom(0, 4);
        opt[answerIdx].id = answerIdx;

        // console.log("q.word.vocalbulary = " + JSON.stringify(q.word.vocalbulary));

        opt[answerIdx].text = q.word.vocalbulary.chinese;
        q.options = opt;

        console.log("q = " + JSON.stringify(q));
        questions.push(q);
      }
      console.log("questions = " + JSON.stringify(questions));
      if (this.exam == null) {
        this.exam = new Exam();
      }
      this.exam.questions = questions;
    });
  }

  private getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

  submit() {
    this.msg('Submit the exam');
    const resultDialogRef = this.resultDialog.open(ExamResultDialogComponent, {
      width: '1024px',
      height: '800px',
      data: this.exam
    });

    resultDialogRef.afterClosed().subscribe(result => {
      this.msg(result);
    });
  }

  log(l: string) {
    console.log(l);
  }

  msg(m: string) {
    this.messageService.add(m);
  }
}
