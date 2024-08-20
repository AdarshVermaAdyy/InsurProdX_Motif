import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MotifButtonModule, MotifDatePickerModule, MotifFormsModule, MotifNativeDateTimeModule, MotifToastModule } from '@ey-xd/ng-motif';
import { Observable } from 'rxjs';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MotifFormsModule,
    MotifButtonModule, 
    FormsModule, 
    ReactiveFormsModule,
    MotifButtonModule,
    MotifDatePickerModule,
    MotifNativeDateTimeModule,
    MotifToastModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent {
  
  userForm: FormGroup;
  toastType = '';
  showErrorToast = false;
  showSuccessToast = false;
  countryList: Observable<any[]>;

  constructor(
    private registration: RegistrationService,
    private router: Router
  ) {

  }
  
  ngOnInit(): void {
    this.initialiseForm();
    this.countryList = this.registration.fetchCountries();
  }

  initialiseForm(){
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
      altPhone: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
      dob: new FormControl(new Date(), Validators.required),
      add1: new FormControl('', [Validators.required]),
      add2: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      pin: new FormControl('', [Validators.required, Validators.pattern("^[1-9][0-9]{5}$")]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('0', [Validators.required])
    })
  }

  //getters
  get firstName(){
    return this.userForm.get('firstName');
  }

  get middleName(){
    return this.userForm.get('middleName');
  }

  get lastName(){
    return this.userForm.get('lastName');
  }

  get email(){
    return this.userForm.get('email');
  }

  get phone(){
    return this.userForm.get('phone');
  }

  get altPhone(){
    return this.userForm.get('altPhone');
  }

  get dob(){
    return this.userForm.get('dob');
  }

  get add1(){
    return this.userForm.get('add1');
  }

  get add2(){
    return this.userForm.get('add2');
  }

  get city(){
    return this.userForm.get('city');
  }

  get pin(){
    return this.userForm.get('pin');
  }

  get state(){
    return this.userForm.get('state');
  }

  get country(){
    return this.userForm.get('country');
  }

  getCountries(){

  }

  saveNewUser(){
    if(!this.userForm.valid){
      Object.keys(this.userForm.controls).forEach(field => {
        const control = this.userForm.get(field) as FormControl;
        control.markAsTouched({onlySelf: true})
      })
      this.showErrorToast = true;
      return;
    }
    this.showSuccessToast = true;
    console.log(this.userForm.value);
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 2000)
  }

  reset(){
    this.userForm.reset();
    this.dob?.setValue(new Date());
    this.country?.setValue('0');
  }
}
