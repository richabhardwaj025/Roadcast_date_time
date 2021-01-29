import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  getDateTime():Observable<any>{
    let dateTime = new Date();
    return of(dateTime.toString());
  }
}
