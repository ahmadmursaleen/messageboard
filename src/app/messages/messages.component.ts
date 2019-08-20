import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  messages = [
    { text: "text1", owner: "owner1" },
    { text: "text2", owner: "owner2" },
    { text: "text3", owner: "owner3" }
  ];
}
