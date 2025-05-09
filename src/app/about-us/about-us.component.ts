import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.startCounters();
  }

  startCounters(): void {
    const counters = document.querySelectorAll('.heading-title');

    counters.forEach(counter => {
      const target = +(counter.getAttribute('data-target') || '0');
      let count = 0;
      const increment = target / 50;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.childNodes[0].nodeValue = Math.ceil(count).toString();
          requestAnimationFrame(updateCount);
        } else {
          counter.childNodes[0].nodeValue = target.toString();
        }
      };

      updateCount();
    });
  }
}
