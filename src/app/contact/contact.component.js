import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
let ContactComponent = class ContactComponent {
    constructor(http, stateFlagsService, fb) {
        this.http = http;
        this.stateFlagsService = stateFlagsService;
        this.fb = fb;
        this.countries = [];
        this.stateFlags = [];
        this.selectedCountry = null;
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', ''],
            city: ['', ''],
            state: [null, Validators.required],
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
    get f() {
        return this.contactForm.controls;
    }
    loadCountries() {
        return this.http.get('assets/countries.json');
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
};
ContactComponent = __decorate([
    Component({
        selector: 'app-contact',
        standalone: true,
        imports: [FormsModule, DropdownModule, CommonModule, ReactiveFormsModule, InputMaskModule, InputTextModule, InputTextareaModule],
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.scss']
    })
], ContactComponent);
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map