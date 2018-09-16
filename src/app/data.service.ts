import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(id){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
