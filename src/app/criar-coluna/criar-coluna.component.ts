import { Component, OnInit, Input } from '@angular/core';
import { retrieveData } from '../servicos/data.service';

@Component({
  selector: 'app-criar-coluna',
  templateUrl: './criar-coluna.component.html',
  styleUrls: ['./criar-coluna.component.scss']
})

export class CriarColunaComponent implements OnInit {
  @Input() public columns: Array<object>;
  public people: Array<string> = [];
  public tags: Array<string> = [];

  constructor(private retrieveData:retrieveData) { }

  public closeFormCriaColuna(event){
    event.target.closest('.bg-op').classList.add('d-none')
  }

  public criaColuna(){
    console.log({
      "title": "teste",
      "cards": [
        {
          "title": "teste title",
          "tags": [
            "RH"
          ],
          "members": [{
            "name": "Alex Pessoa",
            "photoURL": null
          }]
        }
      ]
    })
  }

  ngOnInit() {
    this.retrieveData.getPeople()
      .then(people => people.map(i => this.people.push(i.name)))

    this.retrieveData.getTags()
      .then(tags => this.tags = tags)
  }
}
