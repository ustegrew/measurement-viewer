import { Component, OnInit } from '@angular/core';
import { SwitchstatesService } from '../../service/switchstates/switchstates.service';

@Component({
  selector: 'app-imgview',
  templateUrl: './imgview.component.html',
  styleUrls: ['./imgview.component.css']
})

/**
 * An image loader. Loads the image (= simulation schematics)
 * corresponding to the current switch settings, 
 * showing it in the associated image DOM node.
 */
export class ImgviewComponent implements OnInit 
{
  /* Path to default image (hardcoded, eek!) */
  readonly    kDefaultPath: string = '/assets/img/dc-00000.png';
  
  /* Path (front part) of the next-to-load image */
  readonly    kHead       : string = '/assets/img/dc-';
  
  /* Path (front part) of the next-to-load image */
    readonly    kTail       : string = '.png';
  
  /* Path to the current image */
  fPath : string;
  
  /* cTor. Subscribes to update notifications from the switch state service */
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
  
  /**
   * Update actor, when a resistor is switched on/off
   */
  private _notifyChange (): void
  {
      let n: number;
      let i: number;
      let s: boolean;
      let p: string;
    
      n = this.fSwitchStates.getNumStates ();
      if (n >= 1)
      {   /* Read switch states and generate path to next image */
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
          /* Oops no switches defined. Just keep default path. */
          p = this.kDefaultPath;
      }
    
      /* Will reload associated image DOM node. */
      this.fPath = p;
  }
}
