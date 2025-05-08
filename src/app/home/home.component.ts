import { Component, OnInit } from '@angular/core';
import Swiper, { Mousewheel, Navigation, Pagination } from "swiper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  swiper!: Swiper;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    Swiper.use([Navigation]);

    this.swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 24,
      speed: 500,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      loop: true,
      mousewheel: true,
    });
  }

}
