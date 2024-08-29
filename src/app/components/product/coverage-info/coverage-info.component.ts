import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  MotifButtonModule,
  MotifDatePickerModule,
  MotifFormsModule,
  MotifHeaderModule,
  MotifIconModule,
  MotifNativeDateTimeModule,
  MotifToastModule,
  MotifVerticalNavigationModule,
} from '@ey-xd/ng-motif';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RegistrationService } from 'src/app/services/registration.service';
import {
  IconoirBell,
  IconoirPrivacyPolicy,
  IconoirEditPencil,
  IconoirFavouriteBook,
  IconoirGridPlus,
  IconoirHelpCircle,
  IconoirLogOut,
  IconoirMoreHoriz,
  IconoirMultiplePages,
  IconoirProfileCircle,
  IconoirSearch,
  IconoirSettings,
  MotifActionIcAccountCircle24px,
  MotifActionIcHome24px,
  MotifActionIcSettings24px,
} from '@ey-xd/motif-icon';
 
interface InputField{
  label: string;
  formControlName: string;
  type: 'select' | 'text' | 'radio' | 'checkbox';
  options?: Options[] | [];
  isVisible?: boolean
}
 
interface Options {
  name: string;
  value: string;
}
 
@Component({
  selector: 'app-coverage-info',
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
    MotifToastModule,
    MotifVerticalNavigationModule,
    MotifHeaderModule,
    MotifIconModule,
  ],
  templateUrl: './coverage-info.component.html',
  styleUrl: './coverage-info.component.scss',
})
export class CoverageInfoComponent {
  showMenu: boolean = false;
  userForm: FormGroup;
  toastType = '';
  showErrorToast = false;
  showSuccessToast = false;
  countryList: Observable<any[]>;
  showField1 = true;
  showField2 = true;
  showField3 = true;
  showField4 = true;
  showField5 = true;
  showField6 = true;
  showField7 = true;
  showField8 = true;
  showField9 = true;
  showField10 = true;
  showField11 = false;
  showField12 = false;
  showField13 = false;
  top: any;
  bottom: any;
  contextSwitcher: any;
  isNavbarActive = false;
  optionalFieldsList: InputField[] = [
    {label: "Coverage structure", formControlName: 'Coveragestructure', type: 'text', isVisible: false},
    {label: "Beneficiary Category", formControlName: 'Beneficiarycategory', type: 'text', isVisible: false},
    {label: "Supplemental Death Benefit", formControlName: 'Supplementaldeathbenefit', type: 'text', isVisible: false},
 
  ]
 
  coverageType = [
    'Death Benefit',
    'Terminal Illness Benefit',
    'Accidental Death Benefit',
    'Waiver of Premium',
    'Critical Illness Benefit',
    'Renewal Option',
    'Conversion Option',
    'Family Income Benefit',
    'Return of Premium',
    'Flexible Term Option',
    'Income Protection Benefit',
  ];
  waitTime = [
    'No Waiting Period',
    '30 Days',
    '60 Days',
    '90 Days',
    '180 Days',
    '1 Year',
    '2 Years',
  ];
  constructor(
    private registration: RegistrationService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.initialiseForm();
    this.countryList = this.registration.fetchCountries();
  }
 
  items = [
    {
      label: 'FAQ',
      icon: function () {
        return MotifActionIcSettings24px;
      },
      exact: false,
    },
    {
      label: 'Push Notification',
      icon: function () {
        return IconoirMultiplePages;
      },
      exact: false,
    },
    {
      label: 'Dashboard',
      icon: function () {
        return MotifActionIcHome24px;
      },
      exact: false,
    },
  ];
  initialiseForm() {
    this.userForm = new FormGroup({
      coverage_code1: new FormControl('', Validators.required),
      coverage_name1: new FormControl(''),
      coverage_type1: new FormControl(''),
      coverage_amount: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/),
      ]),
      coverage_term: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/),
      ]),
      coverage_effective_date1: new FormControl('', [Validators.required]),
      coverage_expiry_date: new FormControl('', [Validators.required]),
      coverage_premium: new FormControl('', Validators.required),
      waiting_period: new FormControl(''),
      coverage_condition: new FormControl(''),
      coverage_structure:new FormControl('',[Validators.required]),
      coverage_Beneficiary:new FormControl('',[Validators.required]),
      coverage_benefit:new FormControl('',[Validators.required])
    });
  }
 
  //getters
  get coverage_code1() {
    return this.userForm.get('coverage_code1');
  }
 
  get coverage_name1() {
    return this.userForm.get('coverage_name1');
  }
 
  get coverage_type1() {
    return this.userForm.get('coverage_type1');
  }
 
  get coverage_amount() {
    return this.userForm.get('coverage_amount');
  }
 
  get coverage_term() {
    return this.userForm.get('coverage_term');
  }
 
  get coverage_effective_date1() {
    return this.userForm.get('coverage_effective_date1');
  }
 
  get coverage_expiry_date() {
    return this.userForm.get('coverage_expiry_date');
  }
 
  get coverage_premium() {
    return this.userForm.get('coverage_premium');
  }
 
  get waiting_period() {
    return this.userForm.get('waiting_period');
  }
  get coverage_structure(){
    return this.userForm.get('coverage_structure')
  }
  get coverage_Beneficiary(){
    return this.userForm.get('coverage_Beneficiary')
  }
 get coverage_benefit(){
  return this.userForm.get('coverage_benefit')
 }
  onLinkPress(e: any, words: any) {}
  onLinkPress1(e: any, Words: any) {}
  policy() {
    return IconoirPrivacyPolicy;
  }
 
  saveNewUser() {
    if (!this.userForm.valid) {
      Object.keys(this.userForm.controls).forEach((field) => {
        const control = this.userForm.get(field) as FormControl;
        control.markAsTouched({ onlySelf: true });
      });
      this.showErrorToast = true;
      return;
    }
    this.showSuccessToast = true;
    console.log(this.userForm.value);
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 2000);
  }
 
  reset() {
    this.userForm.reset();
    this.coverage_effective_date1?.setValue(new Date());
    this.coverage_expiry_date?.setValue(new Date());
  }
 
  addRemoveControls(event: any, field: InputField, index: number){
    field.isVisible = event;
    if(event){
      this.userForm.addControl(field.formControlName, new FormControl(''));
    } else {
      this.userForm.removeControl(field.formControlName);
    }
  }
}