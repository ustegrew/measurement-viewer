import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SwitchstatesService } from '../../service/switchstates/switchstates.service';

@Component({
  selector: 'app-switchbank',
  templateUrl: './switchbank.component.html',
  styleUrls: ['./switchbank.component.css']
})

/**
 * Bank of switches that make or break certain links in the simulated circuit. 
 */
export class SwitchbankComponent implements OnInit 
{
  /* Switch positions */
  fR : boolean [];
  
  /* cTor. Sets reference to global switch state service */
  constructor(private fSwitchStates: SwitchstatesService) 
  {
  }

  ngOnInit()
  {
      this.fR = [false, false, false, false, false];
  }
  
  /* Updates switch positions */
  update (i: number): void
  {
      this.fSwitchStates.setState (this.fR[i], i);
  }
}
