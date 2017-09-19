import { Component ,OnInit } from '@angular/core';
import { EventBusService } from './server/event-bus.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public toBuyList:Array<any>=[];
  public cModToBuy:any;
  constructor(public eventServiceBus:EventBusService){

  }

  ngOnInit(){
    this.eventServiceBus.eventBus.subscribe((value)=>{
      // this.toBuyList.push(value);
      this.cModToBuy = value;
      console.log(this.toBuyList);
    })
  }

  public showModAddPanel(){
    return !!this.cModToBuy;
  }
}
