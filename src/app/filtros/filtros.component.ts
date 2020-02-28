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
  public bol: boolean = true;

  constructor(private retrieveData : retrieveData ) { }

  public liberaCadastro(){
    document.querySelector('.line-1').classList.remove('anim-sub','anim-pls');

    if(this.bol){
      document.querySelector('.line-1').classList.add('anim-sub');
      document.querySelector('.step1').classList.add('d-block');
      document.querySelector('.stp1').classList.add('d-block');

      this.bol = false;

    }else{
      document.querySelector('.line-1').classList.add('anim-pls');
      document.querySelector('.step1').classList.remove('d-block');
      document.querySelector('.stp1').classList.remove('d-block');
      document.querySelector('.step2').classList.remove('d-block');
      document.querySelector('.stp2').classList.remove('d-block');

      this.bol = true;
    }
  }

  public avanca(){
    document.querySelector('.step1').classList.remove('d-block');
    document.querySelector('.stp1').classList.remove('d-block');
    document.querySelector('.step2').classList.add('d-block');
    document.querySelector('.stp2').classList.add('d-block');
  }

  public cadastra(){
    document.querySelector('.step2').classList.remove('d-block');
    document.querySelector('.stp2').classList.remove('d-block');
    console.log('cadastrado usuario')
  }

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
