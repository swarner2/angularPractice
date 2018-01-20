import { Component } from "@angular/core";
import { MESSAGES } from "./mock-messages";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  messages = MESSAGES;
}
