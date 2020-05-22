import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

// import 'rxjs/add/operator/toPromise'

@Injectable()
export class retrieveData{
  constructor(private http: HttpClient){}

  // Title
  public getTitle():Promise<any>{
    return this.http.get('https://trello-server-xp.herokuapp.com/titleBoard')
      .toPromise()
      .then((title: string) => title)
  }

  public updateTitle(data):Promise<any>{
    return this.http.put('https://trello-server-xp.herokuapp.com/titleBoard', data)
      .toPromise()
      .then((res: any) => res)
  }

  // https://trello-server-xp.herokuapp.com/
  //
  // Columns
  public getColumns():Promise<any>{
    return this.http.get('https://trello-server-xp.herokuapp.com/columns')
      .toPromise()
      .then((columns: any) => columns)
  }

  public addColumns(data):Promise<any>{
    return this.http.post('https://trello-server-xp.herokuapp.com/columns', data)
      .toPromise()
      .then((columns: any)=> columns)
  }

  // Tasks
  public addTask(data, id):Promise<any>{
    return this.http.put(`https://trello-server-xp.herokuapp.com/columns/${id}`, data)
      .toPromise()
      .then((cards: any)=> cards)
  }

  // Tags
  public getTags(){
    return this.http.get('https://trello-server-xp.herokuapp.com/tags')
    .toPromise()
    .then((tags: any) => tags)
  }

  // People
  public getPeople(){
    return this.http.get('https://trello-server-xp.herokuapp.com/people')
      .toPromise()
      .then((people:any) => people)
  }

  public addUser(data){
    return this.http.post('https://trello-server-xp.herokuapp.com/people', data)
      .toPromise()
      .then((user:any)=> user)
  }
}

