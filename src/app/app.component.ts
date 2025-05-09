import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
    document.addEventListener('keydown', (e) => {
      if (e.code.toLowerCase() == 'escape') {
        this.isMenuOpen = false;
      }
    })
  }

  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    })
  }

}
