import { Injectable   } from '@angular/core';
import { Subject      } from 'rxjs/Subject';
import { Switchbank   } from './switchbank';
import { Notification } from './notification';
import { Observable   } from 'rxjs';

/**
 * Global switch state service. Receives switch change updates 
 * and notifies interested parties about each change.
 */
@Injectable()
export class SwitchstatesService 
{
  /* Notifier object. The channel via which we broadcast switch state channels. An RxJs Observable. */
  public  fNotifier           : Observable<Notification>;
  
  /* The data model. */
  private fSwitches           : Switchbank;
  
  /* Access to notification API. Used by this service. */
  private fNotifications      : Subject<Notification>;
  
  constructor()
  {
      this.fSwitches      = new Switchbank ();
      this.fNotifications = new Subject<Notification> ();
      this.fNotifier      = this.fNotifications.asObservable ();
  }
  
  /**
   * Sets the state of the given switch to ON (true) or OFF (false).
   * 
   * @param   state       The switch state. <code>true</code> for ON and
   *                      <code>false</code> for OFF.
   * @param   i           Zero based index to the corresponding switch record.
   */
  setState (state: boolean, i: number): void
  {
      let notification: Notification;
    
      this._assertIndex (i);
      this.fSwitches.fR [i] = state;
    
      notification = new Notification ();
      this.fNotifications.next (notification);
  }
  
  /**
   * @return        The number of switches available. 
   */
  getNumStates(): number
  {
      return this.fSwitches.fR.length;
  }
  
  /**
   * Returns the state of the given switch.
   * 
   * @param         i       Zero based index to the corresponding switch record.
   * @return        State of switch <code>i</code>
   */
  getState (i: number): boolean
  {
      this._assertIndex (i);
      return this.fSwitches.fR [i];
  }
  
  /**
   * Throws an exception if the given switch index is out of bounds.
   */
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
