import { Component } from '@angular/core';
import { SEOService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fmtl';

  constructor(private seoService: SEOService) {

    // Update the routes Title
    this.seoService.updateTitle();
  }
}
