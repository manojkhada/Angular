import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kma';
  dataArray=[];
  profile={
    studentName:"",
    studentVillage:"",
    studentCity:""
  }
  Nam:string="";
  vil:string=""
  cit:string="";

  get(data:NgForm){
    this.profile={
      studentName:data.value.name,
      studentVillage:data.value.vilage,
      studentCity:data.value.city
    }
    this.dataArray.push(this.profile)
  }
}
