import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent {

  public P: number=10000;
  public r: number=10.25;
  public n: number=1;
  public EMI:number=0;

  public AmountChange(e:any)
  {
   this.P=e.target.value;
  }
  public YearChange(e:any)
  {
     this.n=e.target.value;
  }

  public RateChange(e:any)
  {
    this.r=e.target.value;
  }

  public CalculateClick()
  {
     var n=this.n*12;
     var r=this.r/12/100;
     //alert(`Periods: ${this.n}\nRate : ${this.r}`);
     this.EMI= this.P * r * Math.pow(1+r, n)/ Math.pow(1+r,n) -1;
  }

}
