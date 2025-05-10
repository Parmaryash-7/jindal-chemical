import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SeoServiceService } from './seo-service.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jindal-chemical';

  private _isMenuOpen = false;
  get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }

  set isMenuOpen(value: boolean) {
    this._isMenuOpen = value;
    // document.body.style.overflow = value ? 'hidden' : '';
  }

  toggleMenu(e: any) {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('object');
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const path = event.urlAfterRedirects.split('?')[0];
        this.seo.updateMetaTags(path);
      });
    document.addEventListener('keydown', (e) => {
      if (e.code.toLowerCase() == 'escape') {
        this.isMenuOpen = false;
      }
    })
  }

  constructor(private seo: SeoServiceService,
    private router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    })
  }

}
