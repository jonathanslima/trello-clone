import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Titulo do quadro';
  public vision: boolean = false;

  public changeTitle(newTitle): void{
    this.title = (<HTMLInputElement>newTitle.target).value || 'Titulo do quadro'
  }

  public availableInput(): any{
    setTimeout(function(){
      (<HTMLInputElement>document.querySelector('.input-chg')).focus();
    }, 0)
    console.log(this.vision)
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
}

