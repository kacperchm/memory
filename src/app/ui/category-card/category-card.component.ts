import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faComments, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-category-card",
  templateUrl: "./category-card.component.html",
  styleUrls: ["./category-card.component.css"],
})
export class CategoryCardComponent {
  @Input() categoryName = "";
  @Output() removedClicked = new EventEmitter<void>();
  trashIcon = faTrash;
  commentsIcon = faComments;
  playIcon = faPlay;

  emitRemove() {
    this.removedClicked.emit();
  }
}
