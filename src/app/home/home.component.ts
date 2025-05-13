import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import Swiper, { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  swiper!: Swiper;
  formSubmitted: boolean = false;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile_no: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
    ]),
    message: new FormControl('', [Validators.required])
  })

  restrictNonNumeric(event: KeyboardEvent) {
    const regex = /[0-9]/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    Swiper.use([Autoplay]);
    Swiper.use([Navigation]);

    this.swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 3000,
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

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    console.log(this.contactForm.value);
    console.log(this.contactForm.value.name);

    this.contactForm.reset();
    this.contactForm.setErrors(null);
    this.formSubmitted = false;
  }

}
