import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-flash-card",
  templateUrl: "./flash-card.component.html",
  styleUrls: ["./flash-card.component.css"],
})
export class FlashCardComponent {
  iconTrash = faTrash;
  @Input() word = "";
  @Input() translation = "";
  @Output() removedClicked = new EventEmitter<void>();

  emitRemove() {
    this.removedClicked.emit();
  }
}
