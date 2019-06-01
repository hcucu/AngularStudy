import { Vocalbulary } from "./vocalbulary";

export class MyVocalbulary {
  vocalbulary: Vocalbulary;
  memoryAid: string = '';
  difficulty: number = 0;
  lastTestTime: Date = new Date();
  imageLink: string[] = [];

  constructor(v?: Vocalbulary, m?: string , d?: number, l?: string[]) {
    this.vocalbulary = v;
    this.memoryAid = m;
    this.difficulty = d;
    this.imageLink = l;
  }

  english() {
    return this.vocalbulary.english;
  }

  chinese() {
    return this.vocalbulary.chinese;
  }
}
