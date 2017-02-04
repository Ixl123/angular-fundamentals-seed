import {Component} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';
@Component({selector: 'passenger-dashboard', styleUrls: ['passenger-dashboard.component.scss'], template: `
    <div><h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
        <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
           <p>{{passenger | json}}</p>
           <div class="date">
Check in Date: {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd') : 'Not checked in'}} 
          </div>
        </li>
      </ul>
      </div>
    `})
export class PassengerDashboardComponent {
  passengers : Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedInDate: 1490742000000
    }, {
      id: 2,
      fullname: 'Rose',
      checkedInDate: null
    }, {
      id: 3,
      fullname: 'James',
      checkedInDate: 1490742000000
    }, {
      id: 4,
      fullname: 'Louise',
      checkedInDate: 1490742000000
    }, {
      id: 5,
      fullname: 'Tina',
      checkedInDate: 1490742000000
    }
  ];

}