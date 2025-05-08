import { Component, OnInit } from '@angular/core';
import Swiper, { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";

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
    Swiper.use([Autoplay]);
    Swiper.use([Navigation]);

    this.swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 5000,
      speed: 1000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      autoplay: {
        delay: 5000,
      },
      loop: true,
    });
  }

}
