import { Component, OnInit } from '@angular/core';
import { LunchapiService } from '../lunchapi.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { User } from '../models/user';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private api: LunchapiService,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.logout();
    window.location.href = 'https://getlunch.azurewebsites.net/';
  }
  logout(){
    if(AppComponent.user){
      this.api.logout(AppComponent.user,(res)=>{
        console.log("successful logout");
      },
    (res)=>console.log("failure logout"));
    }
  }

}
