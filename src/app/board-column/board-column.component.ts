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

  public removeColuna(event: any): void{
    event.stopPropagation();
    let el = event.target;
    el.closest('.coluna').classList.add('d-none')
    console.log(el)
  }

  public openFormCriaColuna(){
    let el = <HTMLElement>document.querySelector('.bg-op');
    el.classList.remove('d-none')
  }

  ngOnInit() {
    // console.log(this.columns);
  }
}
