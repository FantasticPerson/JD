import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { ModRecommendComponent } from './mod-recommend/mod-recommend.component';
import { ModItemComponent } from './mod-recommend/mod-item/mod-item.component';
import { ModAddComponent } from './mod-add/mod-add.component';
import { EventBusService } from './server/event-bus.service';
import { NumberPickerComponent } from './number-picker/number-picker.component';
import { ModEditComponent } from './mod-edit/mod-edit.component';
import { ModAddressComponent } from './mod-address/mod-address.component'

@NgModule({
  declarations: [
    AppComponent,
    UserCenterComponent,
    ModRecommendComponent,
    ModItemComponent,
    ModAddComponent,
    NumberPickerComponent,
    ModEditComponent,
    ModAddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
