import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-thing",
  templateUrl: "./new-thing.component.html",
  styleUrls: ["./new-thing.component.css"]
})
export class NewThingComponent implements OnInit {
  @Input() text;

  @Output() update = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
