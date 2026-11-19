import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css'
})
export class Tracks {

  tracks = [
    {
      number: '01',
      title: 'Machine Learning',
      description:
        'Research in intelligent systems, predictive models, deep learning, and data-driven applications.',
      icon: 'bi-cpu'
    },
    {
      number: '02',
      title: 'Artificial Intelligence',
      description:
        'Intelligent agents, generative AI, computer vision, natural language processing, and AI applications.',
      icon: 'bi-stars'
    },
    {
      number: '03',
      title: 'Cyber Security',
      description:
        'Secure systems, privacy, cryptography, network security, threat intelligence, and cyber resilience.',
      icon: 'bi-shield-lock'
    },
    {
      number: '04',
      title: 'Miscellaneous',
      description:
        'Emerging interdisciplinary research, innovative technologies, and other computational applications.',
      icon: 'bi-grid-1x2'
    }
  ];

}