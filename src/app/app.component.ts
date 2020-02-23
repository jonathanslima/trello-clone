import { Component } from '@angular/core';
import { retrieveData } from './servicos/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [retrieveData]
})
export class AppComponent {
  public title: string;

  constructor(private retrieveData:retrieveData) { }


  ngOnInit() {
    this.retrieveData.getBoards()
      .then((res)=>{
        console.log(res)
        this.title = res[0].title;

      }).catch((err)=>{
        console.error('error: ', err)

      })
  }
}

