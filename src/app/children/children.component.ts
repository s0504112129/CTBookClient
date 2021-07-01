import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../child';
import{Output,EventEmitter}from '@angular/core';
@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  childrenArr: Child[] = [];
  children
  child: Child = { name: '', dateBorn: new Date, tz: '' };
@Output() out=new EventEmitter<{name:string,tz:string,dateBorn:Date }>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    console.log(this.child.name);
    //this.childrenArr.push(this.child); 
    this.out.emit({name:this.child.name,tz:this.child.tz,dateBorn:this.child.dateBorn})
    this.child.dateBorn = new Date;
    this.child.tz = '';
    this.child.name = '';
  }
}
