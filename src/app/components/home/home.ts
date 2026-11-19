import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slider } from '../slider/slider';
import { AboutUs } from '../about-us/about-us';
import { Tracks } from '../tracks/tracks';
import { Committee } from '../committee/committee';
import { ImportantDates } from '../important-dates/important-dates';
import { Contact } from '../contact/contact';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Slider,
    AboutUs,
    Tracks,
    ImportantDates,
    Committee,
    Contact,
   
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}