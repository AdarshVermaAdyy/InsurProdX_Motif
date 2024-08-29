import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MotifButtonModule, MotifDatePickerModule, MotifFormsModule, MotifNativeDateTimeModule, MotifToastModule } from '@ey-xd/ng-motif';
import { Observable } from 'rxjs';
import { RegistrationService } from 'src/app/services/registration.service';

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
  selector: 'app-product-details',
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
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})

export class ProductDetailsComponent {
  
  productDetailsForm: FormGroup;
  toastType = '';
  showErrorToast = false;
  showSuccessToast = false;
  countryList: Observable<any[]>;

  // mandatoryFieldsList: InputField[] = [
  //   {label: "Product Code", formControlName: 'productCode', type: 'text'},
  //   {label: "Product Status", formControlName: 'productStatus', type: 'select', options: [{name: 'Yes', value: "yes"}, {name: 'No', value: 'no'}]},
  //   {label: "Category", formControlName: 'category', type: 'select', options: [{name: 'Yes', value: "yes"}, {name: 'No', value: 'no'}]},
  //   {label: "Coverage Code 1", formControlName: 'coverageCode1', type: 'text'},
  //   {label: "Coverage Name 1", formControlName: 'coverageName1', type: 'text'},
  //   {label: "Coverage Code 2", formControlName: 'coverageCode2', type: 'text'},
  //   {label: "Coverage Name 2", formControlName: 'coverageName2', type: 'text'},
  //   {label: "Riders Applicable", formControlName: 'ridersAppicable', type: 'select', options: [{name: 'Yes', value: "yes"}, {name: 'No', value: 'no'}]},
  //   {label: "Rider 1", formControlName: 'riderCheckbox1', type: 'checkbox'},
  //   {label: "", formControlName: 'riderRadio1', type: 'radio', options: [{name: 'Mandatory', value: "mandatory"}, {name: 'Optional', value: 'optional'}]},
  //   {label: "Rider 2", formControlName: 'riderCheckbox2', type: 'checkbox'},
  //   {label: "", formControlName: 'riderRadio2', type: 'radio', options: [{name: 'Mandatory', value: "mandatory"}, {name: 'Optional', value: 'optional'}]},
  // ]
  optionalFieldsList: InputField[] = [
    {label: "Product Name", formControlName: 'productName', type: 'text', isVisible: false},
    {label: "Product Description", formControlName: 'productDescription', type: 'text', isVisible: false},
    {label: "Product Tageline", formControlName: 'productTagline', type: 'text', isVisible: false},
    {label: "Underwriting Guideline", formControlName: 'underwritingGuidelines', type: 'text', isVisible: false},
    {label: "Underwriting Requirements", formControlName: 'underwritingRequirements', type: 'text', isVisible: false},
    {label: "Risk Assessment Criteria", formControlName: 'riskAssessCriteria', type: 'text', isVisible: false},
    {label: "Refundable Premium", formControlName: 'refundablePrem', type: 'text', isVisible: false},
    {label: "Tax Benefits", formControlName: 'taxBenefits', type: 'text', isVisible: false},
    {label: "Renewal", formControlName: 'renewal', type: 'text', isVisible: false},
  ]

  constructor(
    private registration: RegistrationService,
    private _fb: FormBuilder
  ) {

  }
  
  ngOnInit(): void {
    this.initialiseForm();
    this.countryList = this.registration.fetchCountries();
  }

  initialiseForm(){
    this.productDetailsForm = this._fb.group({
      productCode: [''],
      productStatus: [''],
      category: [''],
      coverageCode1: [''],
      coverageName1: [''],
      coverageCode2: [''],
      coverageName2: [''],
      ridersAppicable: [''],
      riderCheckbox1: [],
      riderRadio1: [''],
      riderCheckbox2: [''],
      riderRadio2: [''],
      optionalFields: this._fb.array([])
    })
  }

  get optionalFields(){
    return this.productDetailsForm.get('optionalFields') as FormArray;
  }

  
  addRemoveControls(event: any, field: InputField, index: number){
    field.isVisible = event;
    if(event){
      this.productDetailsForm.addControl(field.formControlName, new FormControl(''));
    } else {
      this.productDetailsForm.removeControl(field.formControlName);
    }
  }
  
}
