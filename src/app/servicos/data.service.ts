import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

// import 'rxjs/add/operator/toPromise'

@Injectable()
export class retrieveData{
  constructor(private http: HttpClient){}

  // Title
  public getTitle():Promise<any>{
    return this.http.get('http://localhost:3000/titleBoard')
      .toPromise()
      .then((title: string) => title)
  }

  public updateTitle(data):Promise<any>{
    return this.http.put('http://localhost:3000/titleBoard', data)
      .toPromise()
      .then((res: any) => res)
  }

  // Columns
  public getColumns():Promise<any>{
    return this.http.get('http://localhost:3000/columns')
      .toPromise()
      .then((columns: any) => columns)
  }

  public addColumns(data):Promise<any>{
    return this.http.post('http://localhost:3000/columns', data)
      .toPromise()
      .then((columns: any)=> columns)
  }

  // Tasks
  public addTask(data, id):Promise<any>{
    return this.http.put(`http://localhost:3000/columns/${id}`, data)
      .toPromise()
      .then((cards: any)=> cards)
  }

  // Tags
  public getTags(){
    return this.http.get('http://localhost:3000/tags')
    .toPromise()
    .then((tags: any) => tags)
  }

  // People
  public getPeople(){
    return this.http.get('http://localhost:3000/people')
      .toPromise()
      .then((people:any) => people)
  }

  public addUser(data){
    return this.http.post('http://localhost:3000/people', data)
      .toPromise()
      .then((user:any)=> user)
  }
}

