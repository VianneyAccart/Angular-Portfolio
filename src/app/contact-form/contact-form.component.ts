import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecaptchaService } from '../shared/services/recaptcha.service';
import { emailPatternValidator } from '../shared/validators/emailRegExp.validator';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm: FormGroup;
  siteKey: any;
  displaySubmitModal: boolean;

  constructor(private formBuilder: FormBuilder, private recaptchaService: RecaptchaService) { 
    this.recaptchaService.getRecaptchaKey().subscribe(key => {
      this.siteKey = key[0].publicKey;
    })
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, emailPatternValidator]],
      message: ['', [Validators.required, Validators.maxLength(500)]],
      recaptcha: ['']
    })
    this.displaySubmitModal = false;
  }

  onSubmit():void {
    alert('ok');
    this.displaySubmitModal = true;
  }

}
