import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  })
export class GetQuote {
  quoteForm!: FormGroup;
  submitted = false;

  private router = inject(Router);
  private fb = inject(FormBuilder);

  private formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSeYKEl1qB8PBR5OzPKFMz92oTjnTJ9BpIdGu87qM7-wcImjdg/formResponse';
  private entryIds = {
    name: 'entry.35225743',
    email: 'entry.548359031',
    phone: 'entry.1316178333',
    serviceType: 'entry.1586556633',
    message: 'entry.227675419',
  };

  constructor() {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      serviceType: [''],
      message: [''],
    });
  }

  submitQuote() {
    if (this.quoteForm.invalid) return;

    const formData = new URLSearchParams();
    formData.set(this.entryIds.name, this.quoteForm.value.name);
    formData.set(this.entryIds.email, this.quoteForm.value.email);
    formData.set(this.entryIds.phone, this.quoteForm.value.phone);
    formData.set(this.entryIds.serviceType, this.quoteForm.value.serviceType);
    formData.set(this.entryIds.message, this.quoteForm.value.message);

    fetch(this.formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        this.submitted = true;
        this.quoteForm.reset();
        this.router.navigate(['/success']);
      })
      .catch((err) => {
        console.error('Google Form submission error', err);
      });
  }
}
