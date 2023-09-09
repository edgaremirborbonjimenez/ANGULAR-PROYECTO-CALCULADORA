import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

resultado=0;
numbers:string[]=['1','2','3','4','5','6','7','8','9','0'];
signs: string[]=['+','-','*','/','=','.']

ingresarTexto(number:any){

this.resultado+= number;
}

calcularResultado(){



}

}
