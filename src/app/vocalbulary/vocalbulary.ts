export class Vocalbulary {
  // language: string;
  // spell: string;
  // pronounciation: string;

  // words: Word[];

  // constructor(w: Word[]) {
  //   // this.words = [
  //   //   new Word("English", "hello"),
  //   //   new Word("Chinese", "你好")
  //   // ];
  //   this.words = w;
  // }

  // getWordByLanguage(lan: string): Word {
  //   return this.words.find(x => {
  //     return x.language === lan;
  //   });
  // }


  english: string;
  chinese: string;
  pronounciation: string = '';

  constructor(en: string, cn: string, p?: string) {
    this.english = en;
    this.chinese = cn;
    this.pronounciation = p;
  }

  // speak() {};
}
