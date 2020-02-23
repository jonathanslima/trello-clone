import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit {
  public label = 'FILTRO AVANÇADO';
  public showFilter = false;
  constructor() { }

  ngOnInit() {
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
