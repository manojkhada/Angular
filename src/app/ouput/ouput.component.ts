import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-ouput',
  templateUrl: './ouput.component.html',
  styleUrls: ['./ouput.component.css']
})
export class OuputComponent implements OnInit {

  Nam:string="";
  vil:string=""
  cit:string="";

  get(data:NgForm){
    console.log(data.value);
  this.Nam=data.value.name;
  this.vil=data.value.vilage;
  this.cit=data.value.city;
  data.reset();
  }
  constructor() {
    // console.log(this.i.name);

   }

  ngOnInit(): void {
  }

}
