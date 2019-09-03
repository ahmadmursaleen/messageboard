import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Messages } from "./messages";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WebService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private httpClient: HttpClient) {}

  messages: Observable<Messages>;

  getMessages: Function = (): Observable<Messages> => {
    this.messages = this.httpClient.get<Messages>(
      "http://localhost:3000/api/messages"
    );

    return this.messages;
  };

  postMessages: Function = (message: Messages): Observable<Messages> => {
    return this.httpClient.post<Messages>(
      "http://localhost:3000/api/messages",
      message,
      this.httpOptions
    );
  };
}
