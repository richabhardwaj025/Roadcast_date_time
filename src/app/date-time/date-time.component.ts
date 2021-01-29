import { Component, OnInit } from '@angular/core';
import { DateTimeService } from './date-time.service';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {

  dateTime:Date;

  // DateTime Service Object is created
  constructor(private dateObj: DateTimeService) {
  }

  ngOnInit() {
    setInterval(()=>{                 // Updates current time per second
      this.currentTime();
    },1000)
  }

  currentTime(){
    this.dateObj.getDateTime().subscribe(data=>{        // gets data from the service
      this.dateTime = new Date(data);
    });
  }

}
