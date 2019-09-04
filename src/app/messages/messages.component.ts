import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { WebService } from "../web.service";
import { Messages } from "../messages";
import { Subscription } from "rxjs";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  @Output() onPost = new EventEmitter();

  constructor(private WebService: WebService) {}
  messages: Messages;
  _subscription: Subscription;
  ngOnInit() {
    this._subscription = this.WebService.getMessages().subscribe(response => {
      this.messages = response;
    });
  }

  /*messages = [
    { text: "text1", owner: "owner1" },
    { text: "text2", owner: "owner2" },
    { text: "text3", owner: "owner3" }
  ];
  */

  postOnServer(message: Messages) {
    //console.log(message);
    this._subscription = this.WebService.postMessages(message).subscribe(
      response => {
        this.onPost.emit(response);
        console.log(response);
      }
    );
  }

  ngOnDestroy() {
    // unsubscribing from an observable
    // console.log('unsubscribing');
    this._subscription.unsubscribe();
  }
}
