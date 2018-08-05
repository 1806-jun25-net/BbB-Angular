import { Component, OnInit } from '@angular/core';
import { LunchapiService } from '../lunchapi.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { ArchiveDrive } from '../models/archivedrive';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private api: LunchapiService,
  private route: ActivatedRoute) { }
  
  drives: ArchiveDrive[];

  ngOnInit() {
    this.get();
  }
  get(){
    this.api.getDrives((res)=>{
      console.log("successful drives");
      console.log(res);
      this.drives = res;
    },
  (res)=>console.log("failure drives"));
  }
  
type(i){
  if(this.drives[i].isPickup){
  return 'Pickup';
}
  return 'Join';
}

size(i){
  return this.drives[i].usersReal.length;
} 

driveTime(i) {
        return new Date(this.drives[i].time);
}

}
