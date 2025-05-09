import { Component } from '@angular/core';

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
    document.body.style.overflow = value ? 'hidden' : '';
  }

  toggleMenu(e: any) {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('object');
  }

  ngOnInit() {
    document.addEventListener('keydown', () => {
      this.isMenuOpen = false;
    })
  }
}
