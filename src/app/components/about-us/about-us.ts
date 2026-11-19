import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  protected readonly stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '10K+', label: 'Happy Coustomers' },
    { value: '99%', label: 'Delivery Rate' },
    { value: '24/7', label: 'Coutomer Support' }
  ];

  protected readonly values = [
    {
      icon: 'bi bi-heart-pulse-fill',
      title: 'Patient-First Care',
      desc: 'Every treatment plan is custom-tailored to the individual patient’s needs, comfort, and recovery goals.'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Clinical Excellence',
      desc: 'Our surgical team upholds the highest standards of safety, quality, and medical precision in orthopedics.'
    },
    {
      icon: 'bi bi-cpu',
      title: 'Modern Innovation',
      desc: 'Leveraging cutting-edge diagnostic technology, minimally invasive surgery, and AI-powered joint analysis.'
    }
  ];
}
