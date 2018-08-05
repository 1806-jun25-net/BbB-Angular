import { Component, OnInit } from '@angular/core';
import { LunchapiService } from '../lunchapi.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private api: LunchapiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    window.location.href = 'https://getlunch.azurewebsites.net/';
  }

}
