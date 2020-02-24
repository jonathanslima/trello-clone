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
  public hidden: boolean = true;
  constructor() {}

  public toogleSubmenu() {
    let el = <HTMLElement>document.querySelector(".dropdown-submenu");
    el.classList.remove("d-none", "d-block");

    if (this.hidden) {
      el.classList.add("d-block");
      this.hidden = false;
    } else {
      el.classList.add("d-none");
      this.hidden = true;
    }
  }

  todo = [
    "Agendar as entrevistas",
    "Enviar os testes",
    "Corrigir o teste técnico"
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnInit() {
    console.log(this.columns);
  }
}
