import { Component, OnInit } from '@angular/core';
import { SwitchstatesService } from '../../service/switchstates/switchstates.service';

@Component({
  selector: 'app-imgview',
  templateUrl: './imgview.component.html',
  styleUrls: ['./imgview.component.css']
})

export class ImgviewComponent implements OnInit 
{
  readonly    kDefaultPath: string = '/assets/img/dc-00000.png';
  readonly    kHead       : string = '/assets/img/dc-';
  readonly    kTail       : string = '.png';
  
  fPath : string;
  
  constructor (private fSwitchStates: SwitchstatesService)
  {
      this.fSwitchStates.fNotifier.subscribe 
      (
          note =>
          {
              this._notifyChange ();
          }
      );
  }

  ngOnInit()
  {
    this.fPath = this.kDefaultPath;
  }
  
  private _notifyChange (): void
  {
      let n: number;
      let i: number;
      let s: boolean;
      let p: string;
    
      n = this.fSwitchStates.getNumStates ();
      if (n >= 1)
      {
          p = this.kHead;
          for (i = 0; i < n; i++)
          {
              s  = this.fSwitchStates.getState (i);
              p += s  ?  '1' : '0';
          }
          p += this.kTail;
      }
      else
      {
          p = this.kDefaultPath;
      }
    
      this.fPath = p;
  }
}
