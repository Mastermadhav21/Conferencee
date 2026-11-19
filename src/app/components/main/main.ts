import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class MainComponent {

  constructor(private router: Router) {}

  visitSite(): void {

    sessionStorage.setItem('userChoice', 'visitor');

    this.router.navigate(['/home']);

  }

  becomePartner(): void {

    sessionStorage.setItem('userChoice', 'partner');

    this.router.navigate(['/business-onboarding']);

  }

}