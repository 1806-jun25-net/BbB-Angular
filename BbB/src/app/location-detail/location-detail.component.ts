import { Component, OnInit } from '@angular/core';
import { LunchapiService } from '../lunchapi.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Destination } from '../models/destination';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  constructor(private api: LunchapiService,
    private route: ActivatedRoute) { }
    dest: Destination;
  ngOnInit() {
    this.get();
  }
  
  get(){
    let id = this.route.snapshot.paramMap.get("id");
    this.api.getDestination(id,(res)=>{
      console.log("successful dest");
      console.log(res);
      this.dest = res;
    },
  (res)=>console.log("failure dests")
);
  }



    // this is how we get a named route parameter out of this route
    // in this case, my param is called "name"
}
