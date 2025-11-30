import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class GetQuote implements OnInit {
  quoteForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern(/^\d{10}$/)],
      serviceType: ['', Validators.required],
      message: [''],
    });
  }

  submitQuote() {
    if (this.quoteForm.invalid) return;
    console.log('Quote Request:', this.quoteForm.value);
  }
}
