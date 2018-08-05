import { Destination } from "./destination";
import { User } from "./user";
import { Driver } from "./driver";

export class ArchiveDrive{
id: number;
dest: Destination;
isPickup: boolean;
time: Date;
driver: Driver;
usersReal: User[];
type(){
    if(this.isPickup){
    return 'Pickup';
  }
    return 'Join';
  }
}