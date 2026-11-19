import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.html',
  styleUrl: './slider.css'
})
export class Slider implements OnInit, OnDestroy {

  days = '00';
  hours = '00';
  minutes = '00';
  seconds = '00';

  private countdownInterval: ReturnType<typeof setInterval> | undefined;

  private targetDate =
    new Date('2026-11-25T09:00:00+05:30').getTime();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    // Update immediately
    this.updateCountdown();

    // Update every second
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();

      // Force Angular to update HTML
      this.cdr.detectChanges();

    }, 1000);
  }


  updateCountdown(): void {

    const now = new Date().getTime();
    const difference = this.targetDate - now;

    if (difference <= 0) {

      this.days = '00';
      this.hours = '00';
      this.minutes = '00';
      this.seconds = '00';

      if (this.countdownInterval) {
        clearInterval(this.countdownInterval);
      }

      this.cdr.detectChanges();
      return;
    }


    const day = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hour = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minute = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const second = Math.floor(
      (difference / 1000) % 60
    );


    this.days = this.formatTime(day);
    this.hours = this.formatTime(hour);
    this.minutes = this.formatTime(minute);
    this.seconds = this.formatTime(second);
  }


  private formatTime(value: number): string {
    return value.toString().padStart(2, '0');
  }


  ngOnDestroy(): void {

    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

  }
}