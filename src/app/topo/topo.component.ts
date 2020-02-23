import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {
  @Input() public title: string;
  public vision: boolean = false;

  constructor() { }

  public changeTitle(newTitle): void{
    this.title = (<HTMLInputElement>newTitle.target).value || 'Titulo do quadro'
  }

  public availableInput(): any{
    setTimeout(function(){
      (<HTMLInputElement>document.querySelector('.input-chg')).focus();
    }, 0)

    if(this.vision === false){
      this.vision = true;
      return
    }
    this.vision = false;
  }

  public availableInputByEnter(e){
    if (e.key === "Enter") {
      this.availableInput()
    }
  }


  ngOnInit() {
  }

}
