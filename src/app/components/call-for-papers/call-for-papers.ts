import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-call-for-papers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-for-papers.html',
  styleUrl: './call-for-papers.css',
})
export class CallForPapers {

  submitPaper() {
    console.log('Submit Paper clicked');

    // Add your paper submission link here later
    // window.open('https://your-submission-link.com', '_blank');
  }

}