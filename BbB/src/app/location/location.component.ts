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

  ngOnInit() {
    this.get();
    // this.test = 'start';
    // this.api.getDestinations(
    //   (res)=> {this.dests = res; this.test = 'true';},
    //   (res)=>{this.test = 'fail'}
    //   );
  }
  get(): void {
    this.api.getDestinations()
    .subscribe(d => this.dests = d);
  }

}
