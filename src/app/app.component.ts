import { Component } from "@angular/core";
import { MESSAGES } from "./mock-messages";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  messages = MESSAGES;

  updateModel(newMsg, event) {
    console.log("newMsg", newMsg, "event", event);
    // this.messages = this.messages.map(
    //   (m, i) => (m.id === i ? (m.text = newMsg) : m)
    // );
  }
}
