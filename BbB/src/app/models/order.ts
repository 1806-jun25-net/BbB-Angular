import { User } from "./user";
import { OrderItem } from "./orderitem";

export class Order{
    user: User;
    items: OrderItem[];
}