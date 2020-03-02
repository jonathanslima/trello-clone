import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

// import 'rxjs/add/operator/toPromise'

@Injectable()
export class retrieveData{
  constructor(private http: HttpClient){}

  // Title
  public getTitle():Promise<any>{
    return this.http.get('http://my-json-server.typicode.com/jonathanslima/trello-clone-fake-api/titleBoard')
      .toPromise()
      .then((title: string) => title)
  }

  public updateTitle(data):Promise<any>{
    return this.http.put('http://my-json-server.typicode.com/jonathanslima/trello-clone-fake-api/titleBoard', data)
      .toPromise()
      .then((res: any) => res)
  }

  // Columns
  public getColumns():Promise<any>{
    return this.http.get('http://my-json-server.typicode.com/jonathanslima/trello-clone-fake-api/columns')
      .toPromise()
      .then((columns: any) => columns)
  }

  public addColumns(data):Promise<any>{
    return this.http.post('http://my-json-server.typicode.com/jonathanslima/trello-clone-fake-api/columns', data)
      .toPromise()
      .then((columns: any)=> columns)
  }

  // Tasks
  public addTask(data, id):Promise<any>{
    return this.http.put(`http://my-json-server.typicode.com/jonathanslima/trello-clone-fake-api/columns/${id}`, data)
      .toPromise()
      .then((cards: any)=> cards)
  }

  // Tags
  public getTags(){
    return this.http.get('http://my-json-server.typicode.com/jonathanslima/trello-clone-fake-api/tags')
    .toPromise()
    .then((tags: any) => tags)
  }

  // People
  public getPeople(){
    return this.http.get('http://my-json-server.typicode.com/jonathanslima/trello-clone-fake-api/people')
      .toPromise()
      .then((people:any) => people)
  }

  public addUser(data){
    return this.http.post('http://my-json-server.typicode.com/jonathanslima/trello-clone-fake-api/people', data)
      .toPromise()
      .then((user:any)=> user)
  }
}

