import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Destination } from './models/destination';
import { Observable } from '../../node_modules/rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class LunchapiService {

  constructor(private httpClient: HttpClient) { }
  private base = 'https://getlunchapi.azurewebsites.net/api/';

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

}
