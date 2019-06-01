import { Injectable } from "@angular/core";
import { MessagesComponent } from "./messages.component";

@Injectable({
  providedIn: "root"
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    if (this.messages.length == 10) {
      this.messages.shift();
    }
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
