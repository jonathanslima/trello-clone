import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  public label = 'FILTRO AVANÇADO';
  public showFilter = false;
  public filteredCard: string;

  constructor() { }

  ngOnInit() {}

  public getSearch(event, classe): void{
    this.filteredCard = event.target.value;
    let totalCards = [].slice.call(document.querySelectorAll('.task'))
    let exp = new RegExp(this.filteredCard.trim(), 'i');

    if(this.filteredCard){
      totalCards.map((card)=> {
        let el : any = [].slice.call(card.querySelectorAll(classe));
        let deleteCard : Boolean;
        card.classList.remove('d-none', 'd-block')

        if(classe === '.persona' && el.length < 1) deleteCard = true;

        for(let i = 0; i < el.length; i++){
          if(!(exp.test(el[i].textContent)) ){
            deleteCard = true;

          }else{
            deleteCard = false
            break;
          }
        }

        if(deleteCard) card.classList.add('d-none')
      })
    }else{
      totalCards.map(card=> card.classList.remove('d-none'))
    }
  }

  public toogleFilters(){
    let el = <HTMLElement>document.querySelector('.block-filters');
    el.classList.remove('d-block', 'd-none');

    if(this.showFilter == false){
      this.showFilter = true;
      el.classList.add('d-block');
    }else{
      this.showFilter = false;
      el.classList.add('d-none');
    }
  }

}
