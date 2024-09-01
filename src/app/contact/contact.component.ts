import { Component, OnInit} from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StateFlagsService } from '../servicesTwo/state-flags.service';

interface Country {
  name: string;
  code: string;
  flag: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, DropdownModule, CommonModule, ReactiveFormsModule, InputMaskModule, InputTextModule, InputTextareaModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements  OnInit{

  contactForm!: FormGroup;

  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  city: string | undefined;
  message: string | undefined;

  countries: Country[] = [];

  stateFlags: any[] = [];

  selectedCountry: Country | null = null;

  constructor(private http: HttpClient, private stateFlagsService: StateFlagsService, private fb: FormBuilder) {


    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', ''],
      city: ['', ''],
      state:[null, Validators.required],
      country: [null, Validators.required],
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
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form submitted:', formData);
    }
    const formData = this.contactForm.value;
    console.log('Form submitted:', formData);
  }

  resetForm() {
    this.contactForm.reset(); // Reset the form

    // Optionally, set default values after reset:
    // this.contactForm.reset({
    //   name: '',
    //   email: '',
    //   message: '',
    //   country: null
    // });

    this.selectedCountry = null; // Reset selected country display
  }

}
