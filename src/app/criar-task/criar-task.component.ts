import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { retrieveData } from '../servicos/data.service'

@Component({
  selector: 'app-criar-task',
  templateUrl: './criar-task.component.html',
  styleUrls: ['./criar-task.component.scss']
})
export class CriarTaskComponent implements OnInit {
  @Input() public columns: Array<object>;
  @Input() public nameCol: string;
  @Output() atualizaColunas = new EventEmitter();

  public people: Array<string> = [];
  public tags: Array<string> = [];
  public objPeople: any = {};

  constructor(private retrieveData:retrieveData) { }

  public closeFormCriaTask(){
    let el = <HTMLElement>document.querySelector('#closeFormTask');
    el.closest('.bg-op-task').classList.add('d-none');
  }

  public criaTask(formData){
    let id;
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
    let cardTotal = [];
    let cardAtual = [
      {
        "title": formData.task,
        "tags": listaTags,
        "members": listaPessoas
      }
    ];

    this.columns.map((arr: any)=>{
      if(arr.title == this.nameCol){
        id = arr.id;
        cardTotal.push(arr.cards);
      }
    })

    let mergeCards = [...cardTotal[0], ...cardAtual]
    let data = {
      "title": this.nameCol,
      "cards": mergeCards
    };

    console.log(data)

    this.retrieveData.addTask(data, id)
      .then(()=>{
        this.retrieveData.getColumns()
          .then(res => {
            this.atualizaColunas.emit(res)
          })
        alert('cadastrado task!')
        this.closeFormCriaTask()
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
