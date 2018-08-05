import { Component, OnInit } from '@angular/core';
import { ArchiveDrive } from '../models/archivedrive';
import { LunchapiService } from '../lunchapi.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.css']
})
export class  ArchiveDetailComponent implements OnInit {

  constructor(private api: LunchapiService,
    private route: ActivatedRoute) { }
    
    drive: ArchiveDrive;
  ngOnInit() {
    this.get();
  }
  get(){
    let id = this.route.snapshot.paramMap.get("id");
    this.api.getDrive(id,(res)=>{
      console.log("successful drive");
      console.log(res);
      this.drive = res;
    },
  (res)=>console.log("failure drive"));
  }
  type(){
    if(this.drive.isPickup){
    return 'Pickup';
  }
    return 'Join';
  }
  
  size(){
    return this.drive.usersReal.length;
  } 
  
  driveTime() {
          return new Date(this.drive.time);
  }
}
