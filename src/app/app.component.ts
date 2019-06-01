import { Component } from '@angular/core';
import { Vocalbulary } from './vocalbulary/vocalbulary';
import { LibService } from './vocalbulary/lib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vocalbulary Study';
  // lib: Vocalbulary[] = [];

  constructor(libSvc: LibService) {
    // libSvc.getLib().subscribe();
  }
}
