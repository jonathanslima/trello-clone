import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

// import 'rxjs/add/operator/toPromise'

@Injectable()
export class retrieveData{
  constructor(private http: HttpClient){}

  public getBoards():Promise<any>{
    return this.http.get('http://localhost:3000/boards')
      .toPromise()
      .then((boards: any) => boards)
  }

  public getTags(){
    return this.http.get('http://localhost:3000/tags')
    .toPromise()
    .then((tags: any) => tags)
  }

  public getPeople(){
    return this.http.get('http://localhost:3000/people')
      .toPromise()
      .then((people:any) => people)
  }
}

