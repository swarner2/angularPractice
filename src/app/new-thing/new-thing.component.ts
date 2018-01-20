import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-new-thing",
  templateUrl: "./new-thing.component.html",
  styleUrls: ["./new-thing.component.css"]
})
export class NewThingComponent implements OnInit {
  @Input() message;

  constructor() {}

  ngOnInit() {}

  display(msg): void {
    console.log(msg);
  }
}
