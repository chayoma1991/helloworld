import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  name ;
  email ;
  formValue ;
  register =[];
  
  constructor() { }

  ngOnInit() {
    // setTimeout(function() {
    //   this.name="new chioma";
    // }, 10000);
   // setTimeout(function() {
   //   this.name="new charles";
   // }, 13000);
   // setTimeout(function() {
  // this.name="new biola";
   // }, 16000);
  }
   
  onSubmit(myForm){
    console.log(myForm.value);
    console.log(this.email);
    this.formValue = myForm.value;
    this.register.push(this.formValue);
    myForm.reset();
   }
}
