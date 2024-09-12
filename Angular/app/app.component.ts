import { Component } from '@angular/core';
import { AddService } from './add.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private addService: AddService){}

  title = 'Simple Calculator';
  result!:number;
  num1!: number;
  num2!: number;

  add(){ 
    console.log(this.num1);
    console.log(this.num2);
    this.addService.add(this.num1,this.num2).subscribe((res)=>{
      this.result= res;
    });
  }

  sub(){
    console.log(this.num1);
    console.log(this.num2);
    this.addService.sub(this.num1,this.num2).subscribe((res)=>{
      this.result= res;
    });
  }

  mult(){
    console.log(this.num1);
    console.log(this.num2);
    this.addService.mult(this.num1,this.num2).subscribe((res)=>{
      this.result= res;
    });
  }

  div(){
    console.log(this.num1);
    console.log(this.num2);
    this.addService.div(this.num1,this.num2).subscribe((res)=>{
      this.result= res;
    });
  }

  mod(){
    console.log(this.num1);
    console.log(this.num2);
    this.addService.mod(this.num1,this.num2).subscribe((res)=>{
      this.result= res;
    });
  }

}