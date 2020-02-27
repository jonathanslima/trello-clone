import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

// import 'rxjs/add/operator/toPromise'

@Injectable()
export class retrieveData{
  constructor(private http: HttpClient){}

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

  public getColumns():Promise<any>{
    return this.http.get('http://localhost:3000/columns')
      .toPromise()
      .then((columns: any) => columns)
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

