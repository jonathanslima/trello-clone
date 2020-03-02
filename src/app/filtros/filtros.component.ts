import { Component, OnInit, Input } from '@angular/core';
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
  public userImg: string = '../../assets/img/user.png';
  public bol: boolean = true;
  public allCards: Array<any>;
  public filteredCard: string;
  @Input() public valueSearch: string;

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

  public cadastra(formData){
    document.querySelector('.step2').classList.remove('d-block');
    document.querySelector('.stp2').classList.remove('d-block');

    let data = {
      name: formData.user,
      photoURL: formData.urlImg || null
    };

    this.retrieveData.addUser(data)
      .then((user)=>{
        alert(`Usuário ${user.name} cadastrado`);
        this.retrieveData.getPeople()
          .then(people => {
            this.people = people;
          })
      })
  }

  public toFilter(event, classe) :void{
    let value = event.srcElement.textContent;
    this.filteredCard = value;
    var totalCards = [].slice.call(document.querySelectorAll('.task'))

    console.log(this.valueSearch)

    if(this.filteredCard){
      totalCards.map((card)=> {
        var el : any = [].slice.call(card.querySelectorAll(classe));
        var deleteCard : Boolean;
        card.classList.remove('d-none',  'd-block')

        if(classe === '.persona' && el.length < 1) deleteCard = true;

        for(let i = 0; i < el.length; i++){
          if(this.filteredCard === "Todas"){
            deleteCard = false
            break;

          }else if(this.filteredCard !== el[i].textContent){
            deleteCard = true;

          }else{
            deleteCard = false
            break;
          }
        }

        if(deleteCard)card.classList.add('d-none')
      })
    }
  }

  ngOnInit() {
    this.retrieveData.getColumns()
      .then(column => this.allCards = column)

    this.retrieveData.getTags()
      .then(tag => this.tags = tag)

    this.retrieveData.getPeople()
      .then(people => {
        this.people = people;
      })
  }

}
