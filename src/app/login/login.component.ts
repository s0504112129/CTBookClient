import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private detailService:DetailsService) { }
  lastName:string="";
  firstName:string="";
  ngOnInit() {
    this.lastName= this.detailService.detail.lastName
    this.firstName=this.detailService.detail.firstName
  }
  
}
