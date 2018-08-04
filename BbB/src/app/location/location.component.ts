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
    dests2;
    tests;

  ngOnInit() {
    this.get();
    this.get2();
    this.tests = 'init';
    // this.test = 'start';
    // this.api.getDestinations(
    //   (res)=> {this.dests = res; this.test = 'true';},
    //   (res)=>{this.test = 'fail'}
    //   );
  }
  get(){
    this.api.getDestinations().subscribe(
            data => { this.dests = data},
            err => console.error(err),
            () => console.log('done loading foods'));
  }
  get2(){
    this.api.getDestinations2().subscribe(
            data => { this.dests2 = data},
            err => console.error(err),
            () => console.log('done loading foods'));
  }

}
