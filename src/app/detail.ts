import { Child } from './child';

export interface detail{
    lastName:string,
    firstName:string,
    tzUser:string,
    HMO:string,
    Date:Date,
    min:string,
    child:Array<Child> 
}