import { Component, OnInit } from '@angular/core';
import { LunchapiService } from '../lunchapi.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Destination } from '../models/destination';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private api: LunchapiService,
    private route: ActivatedRoute) { }
    dests: Destination[];
    newDest: Destination;
  ngOnInit() {
    this.get();
  }
  get(){
    this.api.getDestinations((res)=>{
      console.log("successful dests");
      console.log(res);
      this.dests = res;
    },
  (res)=>console.log("failure dests")
);
  }
add(name, address){
  this.newDest = new Destination;
    this.newDest.name = name;
    this.newDest.id=-1;
    this.newDest.address=address;
    this.api.postDestination(this.newDest,
    (res)=>{
      console.log("successful postDest");
      console.log(res);
      this.get();
    },
  (res)=>console.log("failure postDest"));
  }
}
