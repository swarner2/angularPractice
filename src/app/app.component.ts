import { Component } from "@angular/core";
import { MESSAGES } from "./messages";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  messages = MESSAGES;

  onUpdate(id, event) {
    console.log(id, event);
  }
}
