import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SwitchstatesService } from '../../service/switchstates/switchstates.service';

@Component({
  selector: 'app-switchbank',
  templateUrl: './switchbank.component.html',
  styleUrls: ['./switchbank.component.css']
})
export class SwitchbankComponent implements OnInit 
{
  fR : boolean [];
  
  constructor(private fSwitchStates: SwitchstatesService) 
  {
  }

  ngOnInit()
  {
      this.fR = [false, false, false, false, false];
  }
  
  update (i: number): void
  {
      this.fSwitchStates.setState (this.fR[i], i);
  }
}
