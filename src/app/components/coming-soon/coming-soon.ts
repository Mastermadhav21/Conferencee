import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coming-soon.html',
  styleUrls: ['./coming-soon.css']
})
export class ComingSoonComponent {

  serviceName = 'This Service';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.serviceName = params['service'] || 'This Service';
    });

  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

}