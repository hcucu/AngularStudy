import { Injectable } from "@angular/core";
import { Exam } from "app/exam/exam";
import { Question } from "app/question/question";
import { Option } from "app/question/option";
import { MyVocalbulary } from "app/vocalbulary/myVocalbulary";
import { Vocalbulary } from "app/vocalbulary/vocalbulary";
import { QuestionService } from "app/question/question.service";
import { MessageService } from "app/messages/message.service";
import { MYLIB, LIB } from "app/vocalbulary/lib";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { LibService } from "app/vocalbulary/lib.service";

@Injectable({
  providedIn: "root"
})
export class ExamService {
  constructor(
    private libService: LibService,
    private questionService: QuestionService,
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

  url = "http://localhost:8081";

  createExam() {
    console.log("this.libService.LIBRARY = " + JSON.stringify(this.libService.LIBRARY));
  }

  getLib(): Observable<Vocalbulary[]> {
    return this.http
      .get<Vocalbulary[]>(this.url + "/vocalbulary")
      .pipe(tap(() => console.log("ExamService.getLib()")));
  }

  // loadExam(): Exam {
  loadExam(): Exam {
    let exam = new Exam();
    let questions = [];
    let lib = [];

    this.getLib().subscribe(
      function(l) {
        // console.log("l = " + JSON.stringify(l));
        lib = l;
        console.log("lib = " + JSON.stringify(lib));
      }
    );
    // console.log("external lib = " + JSON.stringify(lib));

    // let myLib = [];

    for (let i = 0; i < MYLIB.length - 1; i++) {
      // console.log("MYLIB[i] = " + JSON.stringify(MYLIB[i]));
      let q = new Question();
      q.word = MYLIB[i];
      // console.log("q.word = " + JSON.stringify(q.word));

      let opt: Option[] = [];

      for (let j = 0; j < 4; j++) {
        // opt.push(new Option(j, LIB[this.getRandom(0, 30)].chinese));
        let idx = this.getRandom(0, 30);
        // console.log("lib[idx]= " + JSON.stringify(lib[idx]));
        // opt.push(new Option(j, lib[this.getRandom(0, 30)].chinese));
        opt.push(new Option(j, lib[idx].chinese));
      }
      // console.log("options = " + JSON.stringify(opt));

      const answerIdx = this.getRandom(0, 4);
      opt[answerIdx].id = answerIdx;
      opt[answerIdx].text = q.word.vocalbulary.chinese;
      q.options = opt;

      console.log("q = " + JSON.stringify(q));
      questions.push(q);
    }

    console.log("questions = " + JSON.stringify(questions));
    exam.questions = questions;
    return exam;
  }
}
