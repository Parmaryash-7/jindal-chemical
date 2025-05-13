import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import Swiper, { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
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

  constructor(private http: HttpClient) { }

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

    // console.log(this.contactForm.value);
    // console.log(this.contactForm.value.name);

    const httpOptions = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded\r\n",
      },
    };

    this.http.post<any>("https://www.jindalspecialitychemicals.com/mail/contact_form.php", JSON.stringify(this.contactForm.value), httpOptions).subscribe((response: any) => {
      console.log(response);
    });

    this.contactForm.reset();
    this.contactForm.setErrors(null);
    this.formSubmitted = false;
  }

}
