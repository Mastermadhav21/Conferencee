import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactDetails = [
    {
      title: 'CONFERENCE VENUE',
      icon: 'bi-geo-alt',
      primary: 'HMR Institute of Technology and Management',
      secondary: 'Plot No. 326, Hamidpur, Delhi-110036, India',
      action: 'View on map',
      link: 'https://maps.google.com'
    },
    {
      title: 'PHONE NUMBER',
      icon: 'bi-telephone',
      primary: '+91 9999629550',
      secondary: '',
      action: 'Call now',
      link: 'tel:+919999629550'
    },
    {
      title: 'EMAIL ADDRESS',
      icon: 'bi-envelope',
      primary: 'icamc26@hmritm.ac.in',
      secondary: '',
      action: 'Send email',
      link: 'mailto:icamc26@hmritm.ac.in'
    }
  ];

}