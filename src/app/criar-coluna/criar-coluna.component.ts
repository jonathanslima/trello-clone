import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { retrieveData } from '../servicos/data.service';

@Component({
  selector: 'app-criar-coluna',
  templateUrl: './criar-coluna.component.html',
  styleUrls: ['./criar-coluna.component.scss']
})

export class CriarColunaComponent implements OnInit {
  @Input() public columns: Array<object>;
  @Output() atualizaColunas = new EventEmitter();

  public people: Array<string> = [];
  public tags: Array<string> = [];
  public objPeople: any = {};

  constructor(private retrieveData:retrieveData) { }

  public closeFormCriaColuna(){
    let el = <HTMLElement>document.querySelector('#closeForm');
    el.closest('.bg-op').classList.add('d-none');
  }

  public criaColuna(formData){
    let listaPessoas: Array<string> = [];
    let listaTags : Array<string> = [];

    for(let i in formData){
      if(i.indexOf('p -') === 0 && formData[i] === true){
        let person = i.split(' - ');

        this.objPeople.map((item)=>{
          if(item.name == person[1]){
            listaPessoas.push(item)
          }
        })
      }

      if(i.indexOf('t -') === 0 && formData[i] === true){
        let tag = i.split(' - ');
        listaTags.push(tag[1])
      }
    }

    let data = {
      "title": formData.titulo,
      "cards": [
        {
          "title": formData.task,
          "tags": listaTags,
          "members": listaPessoas
        }
      ]
    };

    this.retrieveData.addColumns(data)
      .then(()=>{
        this.retrieveData.getColumns()
          .then(res => {
            this.atualizaColunas.emit(res)
          })
        alert('cadastrado coluna!')
        this.closeFormCriaColuna()
      })
  }

  ngOnInit() {
    this.retrieveData.getPeople()
      .then(people => people.map(i => {
        this.people.push(i.name)
        this.objPeople = people
      }))

    this.retrieveData.getTags()
      .then(tags => this.tags = tags)
  }
}
