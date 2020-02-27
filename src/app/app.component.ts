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
    this.retrieveData.getTitle()
      .then(res => {
        this.title = res.name;
      })

    this.retrieveData.getColumns()
      .then((res)=>{
        this.columns = res;
        console.log(res)

      }).catch((err)=>{
        console.error('error: ', err)

      })
  }
}

