import { Component } from "@angular/core";
import {
  faComments,
  faPlay,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Category } from "../../models/category";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent {
  plusIcon = faPlus;
  categories: Category[] = [{ name: "Sport" }, { name: "Dom" }];
  categoryName = "";

  addComponent() {
    this.categories.push({ name: this.categoryName });
    this.categoryName = "";
  }
}
