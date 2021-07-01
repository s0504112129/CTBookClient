import { Component, OnInit, Input } from '@angular/core';
import{detail}from '../detail'
import { DetailsService } from '../details.service';
import { ValidationUsers } from './validation';
import{Child}from '../child';
import { subscribeOn } from 'rxjs/operators';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private detailService:DetailsService,private serviceLogin:LoginService) { }
  
  count:number=0; 
  num:number=0;
  detail:detail={lastName:" ",firstName:" ",tzUser:" ",Date:new Date,min:" ",HMO:" ",child:[]};
  child:Child[]=[];
  c:Child={name:"",tz:"",dateBorn:new Date};
  masage:string="it is not valid";
  isChild:boolean=false;


  
  ngOnInit(): void {
    this.detail.firstName=this.detailService.detail.firstName;
    this.detail.lastName= this.detailService.detail.lastName;
    this.detail.tzUser=this.detailService.detail.tzUser;
    this.detail.min=this.detailService.detail.min;
    this.detail.HMO=this.detailService.detail.HMO;
    this.detail.child=this.detailService.detail.child;
  }
  addChile(){
    this.isChild=true;
  }
  chekTz(){   
     if(ValidationUsers.validSpelling(this.detail.tzUser)==false)
       // console.log(this.detail.tz)
        alert(this.masage)
     else{
       this.detail.tzUser=this.detail.tzUser;
       
     }   

  }
  add(data:{name:string,tz:string,dateBorn:Date}){
    this.child.push({name:data.name,tz:data.tz,dateBorn:data.dateBorn});
    for (let index = 0; index < this.child.length; index++) {
      this.detail.child[index] = this.child[index];
      
    }
    console.log(this.detail);
    //console.log(this.detail.child);

  }
  
  chekFirstName(){     
    if(ValidationUsers.isNotEmpty(this.detail.firstName)==false)   
       alert(this.masage)
    else{
        this.detail.firstName=this.detail.firstName;
      }  
 }
 chekLastName(){   
  if(ValidationUsers.isNotEmpty(this.detail.lastName)==false)
     alert(this.masage)
  else{
      this.detail.lastName=this.detail.lastName;
    }    
}
  
  addDetail(){
    this.detailService.detail.firstName=this.detail.firstName;
    this.detailService.detail.lastName=this.detail.lastName;
    this.detailService.detail.tzUser=this.detail.tzUser;
    this.detailService.detail.min=this.detail.min;
    this.detailService.detail.HMO=this.detail.HMO;
    this.detailService.detail.child=this.detail.child;
    this.isChild=false;
    this.serviceLogin.AddUser(this.detail);
  }

  

}
