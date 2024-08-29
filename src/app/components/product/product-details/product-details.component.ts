import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  @Output() activeTab = new EventEmitter();

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
    private _fb: FormBuilder,
    private router: Router
  ) {

  }
  
  ngOnInit(): void {
    this.initialiseForm();
    this.countryList = this.registration.fetchCountries();
  }

  initialiseForm(){
    this.productDetailsForm = this._fb.group({
      productCode: ['', [Validators.required]],
      productStatus: ['active', [Validators.required]],
      category: ['term', [Validators.required]],
      coverageCode1: ['', [Validators.required]],
      coverageName1: ['', [Validators.required]],
      coverageCode2: ['', [Validators.required]],
      coverageName2: ['', [Validators.required]],
      ridersApplicable: ['yes', [Validators.required]],
      riderCheckbox1: [''],
      riderRadio1: [''],
      riderCheckbox2: [''],
      riderRadio2: ['']
    })
  }

  //getters
  get productCode(){
    return this.productDetailsForm.get('productCode');
  }
  get productStatus(){
    return this.productDetailsForm.get('productStatus');
  }
  get category(){
    return this.productDetailsForm.get('category');
  }
  get coverageCode1(){
    return this.productDetailsForm.get('coverageCode1');
  }
  get coverageName1(){
    return this.productDetailsForm.get('coverageName1');
  }
  get coverageCode2(){
    return this.productDetailsForm.get('coverageCode2');
  }
  get coverageName2(){
    return this.productDetailsForm.get('coverageName2');
  }
  get ridersApplicable(){
    return this.productDetailsForm.get('ridersApplicable');
  }
  get riderCheckbox1(){
    return this.productDetailsForm.get('riderCheckbox1');
  }
  get riderRadio1(){
    return this.productDetailsForm.get('riderRadio1');
  }
  get riderCheckbox2(){
    return this.productDetailsForm.get('riderCheckbox2');
  }
  
  get riderRadio2(){
    return this.productDetailsForm.get('riderRadio2');
  }
  get productName(){
    return this.productDetailsForm.get('productName');
  }
  get productDescription(){
    return this.productDetailsForm.get('productDescription');
  }
  get productTagline(){
    return this.productDetailsForm.get('productTagline');
  }
  get underwritingGuidelines(){
    return this.productDetailsForm.get('underwritingGuidelines');
  }
  get underwritingRequirements(){
    return this.productDetailsForm.get('underwritingRequirements');
  }
  get riskAssessCriteria(){
    return this.productDetailsForm.get('riskAssessCriteria');
  }
  get refundablePrem(){
    return this.productDetailsForm.get('refundablePrem');
  }
  get taxBenefits(){
    return this.productDetailsForm.get('taxBenefits');
  }
  get renewal(){
    return this.productDetailsForm.get('renewal');
  }
  
  addRemoveControls(event: any, field: InputField, index: number){
    field.isVisible = event;
    if(event){
      this.productDetailsForm.addControl(field.formControlName, new FormControl('', [Validators.required]));
    } else {
      this.productDetailsForm.removeControl(field.formControlName);
    }
  }

  submit(){

  }

  next(){
    this.activeTab.emit('Product Info');
  }
  
}
