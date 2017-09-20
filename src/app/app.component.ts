import { Component ,OnInit ,ViewChild} from '@angular/core';
import { EventBusService } from './server/event-bus.service';
import {ModRecommendComponent} from './mod-recommend/mod-recommend.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public toBuyList:Array<any>=[];
  public cModToBuy:any;

  @ViewChild(ModRecommendComponent)
  private modComponent:ModRecommendComponent;
  
  constructor(public eventServiceBus:EventBusService){

  }

  ngOnInit(){
    this.eventServiceBus.eventBus.subscribe((value)=>{
      this.cModToBuy = value;
    })
  }

  public showModAddPanel(){
    return !!this.cModToBuy;
  }

  public eventFromModAdd(event){
    if(event.type == "close"){
      this.cModToBuy = null;
    } else if(event.type == 'submit'){
      this.toBuyList.push(this.cModToBuy);
      this.modComponent.onModAdded(this.cModToBuy);
      this.cModToBuy = null;
      this.modComponent
    }
  }
}
