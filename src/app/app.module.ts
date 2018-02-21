import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ImgviewComponent } from './components/imgview/imgview.component';
import { SwitchbankComponent } from './components/switchbank/switchbank.component';
import { SwitchstatesService } from './service/switchstates/switchstates.service';


@NgModule({
  declarations: [
    AppComponent,
    ImgviewComponent,
    SwitchbankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SwitchstatesService],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  
}
