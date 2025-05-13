import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
  HttpEventType,
} from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  formSubmitted: boolean = false;

  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    mobile_no: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]{10}$"),
    ]),
    message: new FormControl("", [Validators.required]),
  });

  restrictNonNumeric(event: KeyboardEvent) {
    const regex = /[0-9]/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    const httpOptions = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded\r\n",
      },
    };

    this.http.post<any>("https://www.jindalspecialitychemicals.com/mail/contact_form.php", JSON.stringify(this.contactForm.value), httpOptions).subscribe((response:any) => {
      console.log(response);
    });

    this.contactForm.reset();
    this.contactForm.setErrors(null);
    this.formSubmitted = false;
  }
}
