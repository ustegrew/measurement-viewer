import { Injectable   } from '@angular/core';
import { Subject      } from 'rxjs/Subject';
import { Switchbank   } from './switchbank';
import { Notification } from './notification';
import { Observable   } from 'rxjs';

@Injectable()
export class SwitchstatesService 
{
  public  fNotifier           : Observable<Notification>;
  
  private fSwitches           : Switchbank;
  private fNotifications      : Subject<Notification>;
  
  constructor()
  {
      this.fSwitches      = new Switchbank ();
      this.fNotifications = new Subject<Notification> ();
      this.fNotifier      = this.fNotifications.asObservable ();
  }
  
  setState (state: boolean, i: number): void
  {
      let notification: Notification;
    
      this._assertIndex (i);
      this.fSwitches.fR [i] = state;
    
      notification = new Notification ();
      this.fNotifications.next (notification);
  }
  
  getNumStates(): number
  {
      return this.fSwitches.fR.length;
  }
  
  getState (i: number): boolean
  {
      this._assertIndex (i);
      return this.fSwitches.fR [i];
  }
  
  private _assertIndex (i: number): void
  {
      let n: number;
    
      n = this.fSwitches.fR.length;
      if (i < 0)
      {
          throw new Error ('Index too small. Must be in: [0, ' + n + '[. Given ' + i);
      }
      else if (i >= n)
      {
          throw new Error ('Index too large. Must be in: [0, ' + n + '[. Given ' + i);
      }
  }
}
