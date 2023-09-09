import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  number1:number=0;
  number2: number=0;
  resultado:number=0;

  suma():void{
this.resultado= this.number1+this.number2;
  }

  resta():void{
    this.resultado= this.number1-this.number2;
  }

  division():void{
    this.resultado= this.number1/this.number2;
  }

  multiplicacion():void{
    this.resultado= this.number1*this.number2;

  }
}
