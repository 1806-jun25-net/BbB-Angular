import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Destination } from './models/destination';
import { Observable } from '../../node_modules/rxjs/internal/Observable';
import { MenuItem } from './models/menuitem';



@Injectable({
  providedIn: 'root'
})
export class LunchapiService {

  constructor(private httpClient: HttpClient) { }
  private base = 'https://getlunchapi.azurewebsites.net/api/';
  private base2 = 'https://localhost:44318/api/';

  // getDestinations1(): Observable<Destination[]> {
  //   return this.httpClient.get<Destination[]>(this.url);
  // }
  
  // getDestinations2(){
  //   return this.httpClient.get(this.url);
  // }

  getDestinations(success, failure){
    let url = this.base + 'destination/';
    let request = this.httpClient.get(url);

    // this.httpClient.post(             // method
    //   "http://google.com",            // url
    //   {username: "", password: ""},   // request body
    //   { withCredentials: true }
    //   // enables sending auth cookies with this request
    // )

    let promise = request.toPromise();

    promise.then(success, failure);
  }

  getDestination(id,success, failure){
    let url = this.base + 'destination/'+id;
    let request = this.httpClient.get(url);
    let promise = request.toPromise();

    promise.then(success, failure);
  }

getDrives(success, failure){
  let url = this.base + 'archive/';
  let request = this.httpClient.get(url);
  let promise = request.toPromise();

  promise.then(success, failure);
}

getDrive(id, success, failure){
  let url = this.base + 'archive/'+id;
  let request = this.httpClient.get(url);
  let promise = request.toPromise();

  promise.then(success, failure);
}

postDestination(input, success, failure){
  let url = this.base + 'destination/';
  let request = this.httpClient.post(url,input);
  let promise = request.toPromise();

  promise.then(success, failure);
}

postItem(input:MenuItem, id, success, failure){
  let url = this.base + 'destination/'+id;
  let request = this.httpClient.post(url,input);
  let promise = request.toPromise();
  console.log(url);
  console.log(input);
  console.log(request);
  console.log(promise);
  promise.then(success, failure);
}

deleteItem(itemId, id, success, failure){
  let url = this.base + 'destination/'+id+':'+itemId;
  let request = this.httpClient.delete(url);
  let promise = request.toPromise();
  console.log(url);
  console.log(request);
  console.log(promise);
  promise.then(success, failure);
}

login(user,success,failure){
  let url = this.base+'user/loginadmin';
  let request = this.httpClient.post(url, user);
  let promise = request.toPromise();
  console.log(url);
  console.log(request);
  console.log(promise);
  promise.then(success, failure);
}

logout(user,success,failure){
  let url = this.base+'user/logout';
  let request = this.httpClient.post(url,user);
  let promise = request.toPromise();
  console.log(url);
  console.log(request);
  console.log(promise);
  promise.then(success, failure);
}

}
