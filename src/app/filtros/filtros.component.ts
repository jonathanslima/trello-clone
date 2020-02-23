import { Component, OnInit } from '@angular/core';
import { retrieveData } from '../servicos/data.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss'],
  providers: [retrieveData]

})
export class FiltrosComponent implements OnInit {
  public tags: Array<string>;
  public people: Array<object>;
  public userImg: string;
  constructor(private retrieveData : retrieveData ) { }

  ngOnInit() {
    this.retrieveData.getTags()
      .then(tag => this.tags = tag)

    this.retrieveData.getPeople()
      .then(people => {
        this.people = people;
        this.userImg = people.photoUrl ? people.photoUrl : '../../assets/img/user.png';
      })
  }

}
