import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.css']
})
export class NumberPickerComponent implements OnInit {
  @Input() value = 12;
  @Input() className2:any="";
  @Input() number:number;
  
  constructor() { }

  ngOnInit() {
  }

  public getClassName():any{
    console.log(this.number);
    return "container "+this.className2;
  }

  public onAddClick():void{
    this.number++;
  }

  public onMinusClick():void{
    if(this.number >1){
      this.number--;
    }
  }

  public getNumber():number{
    return this.number;
  }

}
