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
  public columns: Array<object>;

  constructor(private retrieveData:retrieveData) { }

  ngOnInit() {
    this.retrieveData.getBoards()
      .then((res)=>{
        this.title = res[0].title;
        this.columns = res[0].columns;

      }).catch((err)=>{
        console.error('error: ', err)

      })
  }
}

