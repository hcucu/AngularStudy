import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Exam } from '../exam';

@Component({
  selector: 'app-exam-result-dialog',
  templateUrl: './exam-result-dialog.component.html',
  styleUrls: ['./exam-result-dialog.component.css']
})
export class ExamResultDialogComponent implements OnInit {

  public displayedColumns: string[];
  // dataSource = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];

  public dataSource;
  // dataSource =[
  //   {
  //     "word": {
  //       "lastTestTime": "2019-04-07T20:21:58.283Z",
  //       "vocalbulary": { "english": "improvisation", "chinese": " n.即席创作" }
  //     },
  //     "options": [
  //       { "id": 0, "text": " n.即席创作" },
  //       { "id": 1, "text": " n.术语表" },
  //       { "id": 2, "text": "n.[动]黑雁" },
  //       { "id": 3, "text": "n.粗呢衣服,粗呢毯子" }
  //     ],
  //     "userAnswer": -1,
  //     "isCorrect": false,
  //     "isNotSure": false
  //   },
  //   {
  //     "word": {
  //       "lastTestTime": "2019-04-07T20:21:58.283Z",
  //       "vocalbulary": { "english": "improvisation", "chinese": " n.即席创作" }
  //     },
  //     "options": [
  //       { "id": 0, "text": " n.即席创作" },
  //       { "id": 1, "text": " n.术语表" },
  //       { "id": 2, "text": "n.[动]黑雁" },
  //       { "id": 3, "text": "n.粗呢衣服,粗呢毯子" }
  //     ],
  //     "userAnswer": -1,
  //     "isCorrect": false,
  //     "isNotSure": false
  //   },
  //   {
  //     "word": {
  //       "lastTestTime": "2019-04-07T20:21:58.284Z",
  //       "vocalbulary": {
  //         "english": "chloramphenicol",
  //         "chinese": " n.[药]氯霉素"
  //       }
  //     },
  //     "options": [
  //       { "id": 0, "text": " n.不认输,勇敢" },
  //       { "id": 1, "text": " n.发给许可证" },
  //       { "id": 2, "text": " n.谷壳,糠,愚弄v.戏弄,开玩笑" },
  //       { "id": 3, "text": " n.[药]氯霉素" }
  //     ],
  //     "userAnswer": -1,
  //     "isCorrect": false,
  //     "isNotSure": false
  //   }
  // ];

  constructor(
    public dialogRef: MatDialogRef<ExamResultDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Exam
  ) {
    this.displayedColumns = ['english', 'chinese', 'userAnswer', 'isCorrect', 'isNotSure', 'lastTestTime'];
    this.dataSource = data;
  }

  ngOnInit() {

  }

  onClose() {
    this.dialogRef.close("You click close button");
  }
}
