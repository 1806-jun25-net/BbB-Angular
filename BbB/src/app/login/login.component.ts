import { Component, OnInit } from '@angular/core';
import { LunchapiService } from '../lunchapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: LunchapiService,
    private route: ActivatedRoute,
    private router: Router) { }
  try: User;
  ngOnInit() {
    this.checkLogged();
  }
login(name, password){
  this.try = new User();
  this.try.name = name;
  this.try.pass = password;
  return this.api.login(this.try,(res)=>{
    AppComponent.user = res;
      console.log("successful login");
      console.log(res);
      this.router.navigateByUrl('https://getlunchadmin.azurewebsites.net/archive');
    },
  (res)=>console.log("failure login"));
  }

  checkLogged(){
    if(AppComponent.user){
    this.router.navigateByUrl('https://getlunchadmin.azurewebsites.net/archive');
    }
  }
}
