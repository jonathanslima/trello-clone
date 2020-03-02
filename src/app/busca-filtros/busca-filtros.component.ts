import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca-filtros',
  templateUrl: './busca-filtros.component.html',
  styleUrls: ['./busca-filtros.component.scss']
})
export class BuscaFiltrosComponent implements OnInit {
  constructor() { }
  public valueSearch: string;

  public search(valor: string){
    this.valueSearch = valor;
  }

  ngOnInit() {
  }

}
