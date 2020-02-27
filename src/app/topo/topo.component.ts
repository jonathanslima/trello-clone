import { Component, OnInit, Input } from '@angular/core';
import { retrieveData } from '../servicos/data.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [retrieveData]
})
export class TopoComponent implements OnInit {
  @Input() public title: string;
  public vision: boolean = false;

  constructor(private retrieveData:retrieveData) { }

  public changeTitle(newTitle): void{
    this.title = (<HTMLInputElement>newTitle.target).value || 'Titulo do quadro';
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
      let theTitle = {
        "name": this.title
      };

      this.retrieveData.updateTitle(theTitle)
    }
  }


  ngOnInit() {}

}
