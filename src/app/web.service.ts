import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Messages } from "./messages";

@Injectable({
  providedIn: "root"
})
export class WebService {
  constructor(private httpClient: HttpClient) {}

  messages: Observable<Messages>;

  getMessages: Function = (): Observable<Messages> => {
    this.messages = this.httpClient.get<Messages>(
      "http://localhost:3000/messages"
    );

    return this.messages;
  };
}
