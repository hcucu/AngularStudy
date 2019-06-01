import { Question } from "app/question/question";
import { Option } from "app/question/option";
import { MyVocalbulary } from "app/vocalbulary/myVocalbulary";
import { Vocalbulary } from "app/vocalbulary/vocalbulary";

export class Exam {
  questions: Question[] = [];
  // examDate: Date;

  constructor(questions?: Question[]) {
    this.questions = questions;
  }
}
