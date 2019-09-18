import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { FullscreenOverlayContainer } from "@angular/cdk/overlay";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "messages"
  },
  {
    path: "messages",
    component: MessagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
