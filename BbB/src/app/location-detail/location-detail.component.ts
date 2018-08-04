import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // this is how we get a named route parameter out of this route
    // in this case, my param is called "name"
    //let name = this.route.snapshot.paramMap.get("name");
}
