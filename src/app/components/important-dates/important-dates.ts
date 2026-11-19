import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ImportantDate {
  title: string;
  date: string;
  displayDate: string;
  status: 'LIVE' | 'CLOSED';
}

@Component({
  selector: 'app-important-dates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './important-dates.html',
  styleUrl: './important-dates.css'
})
export class ImportantDates implements OnInit {

  dates: ImportantDate[] = [
    {
      title: 'Paper Submission Deadline',
      date: '2026-04-05',
      displayDate: 'April 05, 2026',
      status: 'CLOSED'
    },
    {
      title: 'Acceptance Notification',
      date: '2026-04-10',
      displayDate: 'April 10, 2026',
      status: 'CLOSED'
    },
    {
      title: 'Camera Ready Paper',
      date: '2026-09-15',
      displayDate: 'September 15, 2026',
      status: 'LIVE'
    },
    {
      title: 'Conference Dates',
      date: '2026-08-20',
      displayDate: 'August 20, 2026',
      status: 'LIVE'
    }
  ];

  ngOnInit(): void {
    this.updateDateStatus();
  }

  updateDateStatus(): void {

    const today = new Date();

    // Remove time from today's date
    today.setHours(0, 0, 0, 0);

    this.dates.forEach(item => {

      const eventDate = new Date(item.date);

      // Remove time from event date
      eventDate.setHours(0, 0, 0, 0);

      if (eventDate >= today) {
        item.status = 'LIVE';
      } else {
        item.status = 'CLOSED';
      }

    });
  }
}