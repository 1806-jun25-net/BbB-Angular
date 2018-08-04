import { Destination } from "./destination";
import { User } from "./user";
import { Order } from "./order";
import { Driver } from "./driver";

export class ArchiveDrive{
id: number;
dest: Destination;
IsPickup: boolean;
time: Date;
driver: Driver;
users: User[];
orders: Order[];
}