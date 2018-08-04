import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Destination } from './models/destination';
import { Observable } from '../../node_modules/rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class LunchapiService {

  constructor(private httpClient: HttpClient) { }
  private url = 'https://getlunchapi.azurewebsites.net/api/destination/';

  getDestinations(): Observable<Destination[]> {
    return this.httpClient.get<Destination[]>(this.url);
  }
  
  getDestinations2(){
    return this.httpClient.get(this.url);
  }

  getDestination(id: number): Observable<Destination[]> {
    return this.httpClient.get<Destination[]>(this.url+id.toString());
  }





  // getDestinations(success, failure){

  
  // let url = "https://getlunchapi.azurewebsites.net/api/destination/";
  // let request = this.httpClient.get(url);


  // let promise = request.toPromise();
  // promise.then(success,failure);

  // }


}
