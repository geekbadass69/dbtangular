import { Component, OnInit, ViewChildren, QueryList, ElementRef} from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { StateFlagsService } from '../servicesTwo/state-flags.service';
import { MessageService } from 'primeng/api';

interface Country {
  name: string;
  code: string;
  flag: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, DropdownModule, CommonModule, ReactiveFormsModule, InputMaskModule, InputTextModule, InputTextareaModule, DialogModule, ToastModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService] // Provide the MessageService
})
export class ContactComponent implements  OnInit{

  @ViewChildren('formField') formFields!: QueryList<ElementRef>;

  contactForm!: FormGroup;
  displayDialog: boolean = false; // Control dialog visibility

  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  city: string | undefined;
  message: string | undefined;
  countries: Country[] = [];
  stateFlags: any[] = [];
  selectedCountry: Country | null = null;
  displayErrorDialog: boolean = false; // Used to toggle the error dialog visibility
  errorMessages: string[] = [];isVisible: any;
  dialogHeader: string = 'Form Error'; // Default header
  isLoading: boolean = false; // Track loading state

  constructor(private http: HttpClient, private stateFlagsService: StateFlagsService, private fb: FormBuilder) {


    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', ''],
      city: ['', ''],
      state:['',''],
      country: ['',''],
      message: ['', Validators.required, Validators.minLength(10)],
    
    });

  }

  ngOnInit() {
    this.stateFlagsService.getStateFlags().subscribe(data => {
      this.stateFlags = data;
    });
    this.loadCountries().subscribe(data => {
      this.countries = data;
    });
    this.contactForm.get('country')?.valueChanges.subscribe(value => {
      this.selectedCountry = value;
    });
    
   }

   get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
   
   loadCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('assets/countries.json');
  }

  onSubmit() {
    this.errorMessages = [];
  
    if (this.contactForm.invalid) {
      // Validation logic remains the same
      for (const control in this.contactForm.controls) {
        if (this.contactForm.controls[control].invalid) {
          if (control === 'name') {
            this.errorMessages.push('Name is required.');
          } else if (control === 'email') {
            this.errorMessages.push('Valid email is required.');
          } else if (control === 'state') {
            this.errorMessages.push('State is required.');
          } else if (control === 'country') {
            this.errorMessages.push('Country is required.');
          } else if (control === 'message') {
            this.errorMessages.push('Message must be at least 10 characters long.');
          }
        }
      }
  
      this.displayErrorDialog = true;
      this.dialogHeader = 'Error'; // Update header for error
      return;
    }
  
    // Send form data to the API if form is valid
  // Send form data to the API if form is valid
  const formData = this.contactForm.value;
  
   // Start loading
   this.isLoading = true;

  this.http.post('https://dbtweb.com/apiemail/api/Contact/send', formData)
    .subscribe({
      next: (response) => {
        console.log('Success block hit, response:', response);
        setTimeout(() => {
          this.isLoading = false;
          this.errorMessages.push('Email sent successfully');
          this.dialogHeader = 'Success'; // Update header for success
          this.displayDialog = true; // Show a success dialog
          console.log('Dialog set to true:', this.displayDialog);
        }, 0);
      },
      error: (error) => {
        console.error('Error sending email:', error);
        this.isLoading = false;
        this.errorMessages.push('There was an error sending the email.');
        this.dialogHeader = 'Error'; // Update header for error
        this.displayErrorDialog = true;

      }
    });
  }

  closeDialog() {
    this.displayErrorDialog = false;
    this.focusOnFirstInvalidField();
  }

  closeSuccessDialog() {
    this.displayDialog = false; // Close the success dialog
    this.contactForm.reset(); // Reset the form fields
    this.selectedCountry = null; // Reset any selected country or dropdown values
  }

  focusOnFirstInvalidField() {
    // Check if name is invalid
    if (this.contactForm.get('name')?.invalid) {
      document?.getElementById("name")?.focus();
      return;
    }

    // Check if email is invalid
    if (this.contactForm.get('email')?.invalid) {
      document?.getElementById("email")?.focus();
      return;
    }

    // Check if phone is invalid
    if (this.contactForm.get('country')?.invalid) {
      document?.getElementById("country")?.focus();
      return;
    }

    if (this.contactForm.get('message')?.invalid) {
      document?.getElementById("message")?.focus();
      return;
    }
  }
  // reset form ///////////////////////////////////////
  resetForm() {
    this.contactForm.reset(); // Reset the form

    this.selectedCountry = null; // Reset selected country display
  }

}
