import { Component, OnInit, Input } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-board-column",
  templateUrl: "./board-column.component.html",
  styleUrls: ["./board-column.component.scss"]
})

export class BoardColumnComponent implements OnInit {
  @Input() public columns: Array<object>;
  public imgDefault = "../../assets/img/user.png";

  constructor() {}

  public toogleSubmenu(event) {
    let el = event.target.querySelector('.dropdown-submenu');

    if (el.classList.contains('d-none')) {
      el.classList.add("d-block");
      el.classList.remove("d-none");

    } else {
      el.classList.add("d-none");
      el.classList.remove("d-block");

    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      console.log(event.previousContainer.data)
      console.log(event.container.data)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      console.log(event.previousContainer.data)
      console.log(event.container.data)
    }
  }

  ngOnInit() {
    // console.log(this.columns);
  }
}
