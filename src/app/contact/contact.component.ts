import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
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
