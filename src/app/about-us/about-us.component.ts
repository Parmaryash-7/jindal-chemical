import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChildren('counter') counters!: QueryList<ElementRef>;


  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = +(el.getAttribute('data-target') || '0');
            let count = 0;
            const increment = target / 80;

            const updateCount = () => {
              count += increment;
              if (count < target) {
                el.childNodes[0].nodeValue = Math.ceil(count).toString();
                requestAnimationFrame(updateCount);
              } else {
                el.childNodes[0].nodeValue = target.toString();
              }
            };

            updateCount();
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    this.counters.forEach(counter => {
      observer.observe(counter.nativeElement);
    });
  }
}
