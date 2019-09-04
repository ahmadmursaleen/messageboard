import { Component, ViewChild } from "@angular/core";
import { MessagesComponent } from "./messages/messages.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "messageboard";

  @ViewChild(MessagesComponent, { static: false }) messages: MessagesComponent;

  onPosted(message) {
    this.messages.ngOnInit();
  }
}
