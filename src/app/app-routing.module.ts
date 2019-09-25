import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { FullscreenOverlayContainer } from "@angular/cdk/overlay";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "messages/"
  },
  {
    path: "messages",
    component: MessagesComponent
  },
  {
    path: "messages/:name",
    component: MessagesComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
