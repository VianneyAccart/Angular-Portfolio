import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPatternValidator } from '../shared/validators/emailRegExp.validator';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitted: boolean = false; // Show and hide the success message
  isLoading: boolean = false; // Disable the submit button if we're loading
  responseMessage: string = ''; // The response message showed to the user

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, emailPatternValidator]],
      message: ['', [Validators.required, Validators.minLength(2)]],
      honeypot: [''], // Hidden input which should be empty. Prevent spam and reCaptcha usage
    });
  }

  onSubmit() {
    if (
      this.contactForm.valid &&
      this.contactForm.get('honeypot')!.value === ''
    ) {
      this.contactForm.disable(); // disable the form if it's valid to disable multiple submissions
      let formData: any = new FormData();
      formData.append('Prénom :', this.contactForm.get('firstName')!.value);
      formData.append('Nom :', this.contactForm.get('lastName')!.value);
      formData.append('Adresse email :', this.contactForm.get('email')!.value);
      formData.append('Message :', this.contactForm.get('message')!.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.httpClient
        .post(
          'https://script.google.com/macros/s/AKfycbzkGNFxtw5J28sVbM_IlFtYLC2yZ560IdPG7TRdig/exec',
          formData
        )
        .subscribe(
          (response: any) => {
            if (response.result == 'success') {
              this.responseMessage =
                'Merci pour votre message ! Je vous recontacte dans les plus brefs délais.';
            } else {
              this.responseMessage =
                "Oups... Une erreur s'est produite. Veuillez recharger la page et réessayer.";
            }
            this.contactForm.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            // Remove responseMessage after 10 sec
            setTimeout(() => {
              this.submitted = false
            }, 10000);
            this.isLoading = false; // re enable the submit button
            this.contactForm.reset(); // Reset input values after submitting the form
          },
          (error) => {
            this.responseMessage =
              "Oups... Une erreur s'est produite. Veuillez recharger la page et réessayer.";
            this.contactForm.enable(); // re enable the form after a success
            this.submitted = true; // show the response message
            this.isLoading = false; // re enable the submit button
          }
        );
    }
  }
}
