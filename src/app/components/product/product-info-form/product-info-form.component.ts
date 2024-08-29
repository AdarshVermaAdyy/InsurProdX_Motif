import { group } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MotifButtonModule, MotifFormsModule, MotifToastModule, Option } from '@ey-xd/ng-motif';
import { ProductInfoService } from 'src/app/services/product-info.service';

@Component({
  selector: 'app-product-info-form',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule,
    CommonModule,
    HttpClientModule,
    MotifFormsModule,
    MotifButtonModule, 
    MotifToastModule
  ],
  templateUrl: './product-info-form.component.html',
  styleUrl: './product-info-form.component.scss'
})
export class ProductInfoFormComponent {
  isSubmitted = false;
  dynamicForm: FormGroup;
  availableOptions: any[];
  toastType = '';
  showErrorToast = false;
  showSuccessToast = false;
  @Output() activeTab = new EventEmitter();
  optionalFieldsList: any = [
    { id: 41, label: "Product Start Date", type: "range", min: 18, max: 50, group: 'productBoundary' },
    { id: 42, label: "Product End Date", type: "range", min: 18, max: 50, group: 'productBoundary' },
    { id: 43, label: "Comunication Preferences", type: 'dropdown', options: ['Allowed', 'NotAllowed'], group: 'productServicingAlteration' },
    { id: 44, label: "Beneficiary Update Process", type: 'dropdown', options: ['Allowed', 'NotAllowed'], group: 'productServicingAlteration' },
    { id: 45, label: "Termination Reason Code", type: 'dropdown', options: ['TERM1', 'TERM2'], group: 'terminationCancellation' },
    { id: 42, label: "Premium Adjustment Option", type: 'dropdown', options: ['POLC', 'NA'], group: 'PremiumandPaymentDetail' },
    { id: 42, label: "Premium Loading", type: 'dropdown', options: ['POLC', 'NA'], group: 'PremiumandPaymentDetail' },
    { id: 42, label: "Premium Payment Methods", type: 'dropdown', options: ['POLC', 'NA'], group: 'PremiumandPaymentDetail' },
    { id: 42, label: "Payment Frequency Change", type: 'dropdown', options: ['POLC', 'NA'], group: 'PremiumandPaymentDetail' },
    { id: 42, label: "Partial Payment Option", type: 'dropdown', options: ['POLC', 'NA'], group: 'PremiumandPaymentDetail' },
    { id: 42, label: "Payment Reschedulting", type: 'dropdown', options: ['POLC', 'NA'], group: 'PremiumandPaymentDetail' },
  ]
  constructor(private fb: FormBuilder, private formService: ProductInfoService) {}
  
 
  ngOnInit() {
    this.availableOptions = this.formService.getAvailableOptions();
    this.dynamicForm = this.formService.initializeForm();
    this.addCheckboxes();
  }

  get options(): FormArray {
    return this.dynamicForm.get('options') as FormArray;
  }

  get productBoundaryCondition(): FormArray {
    return this.dynamicForm.get('selectedValues.productBoundaryCondition') as FormArray;
  }
  
  get productBoundary(): FormArray {
    return this.dynamicForm.get('selectedValues.productBoundary') as FormArray; 
  }

  get premiumDetails(): FormArray {
    return this.dynamicForm.get('selectedValues.premiumDetails') as FormArray;
  }
  get  featreandReinsate(): FormArray {
    return this.dynamicForm.get('selectedValues.featreandReinsate') as FormArray;
  }

  get selectedGroupIds(): FormArray {
    return this.dynamicForm.get('selectedValues') as FormArray;
  }
  
  get  terminationCancellation(): FormArray {
    return this.dynamicForm.get('selectedValues.terminationCancellation') as FormArray;
  }
  
  get  productServicingAlteration(): FormArray {
    return this.dynamicForm.get('selectedValues.productServicingAlteration') as FormArray;
  }
  addCheckboxes() {
    this.optionalFieldsList.forEach((option: any, index: number) => {
      if (!this.isDefaultField(option)) {
        this.options.push(new FormControl(false));
      }
    });
  }

  isDefaultField(option: any): boolean {
    return ['Entity Age', 'Maturity Age', 'Premium Payment Frequency', 'PT (In Year)', 'Gender', 'Username', 'Premium Payment Type'].includes(option.label);
  }
  addRemoveControls(event: any, field: any, index: number){
    console.log("Input add check");
    
  }
  onCheckboxChange(e: any, index: number) {
   
    const option = this. optionalFieldsList[index];
  
    const selectedGroup = this.formService.createDynamicFormGroup(option.label, option.type, option);

    if (e) {
      if (option.group === 'productBoundaryCondition') {
        this.productBoundaryCondition.push(selectedGroup);
      } else if (option.group === 'premiumDetails') {
        this.premiumDetails.push(selectedGroup);
      }
      else if(option.group === 'featreandReinsate'){
         this.featreandReinsate.push(selectedGroup);
      }
      else if(option.group === 'productServicingAlteration'){
        this.productServicingAlteration.push(selectedGroup);
      }
      else if(option.group === 'terminationCancellation'){
        this.terminationCancellation.push(selectedGroup);
      }
      else if(option.group === 'productBoundary'){
        this.productBoundary.push(selectedGroup);
      }
      
    } else {
      const selectedIndex = this.findOptionIndex(option.label, option.group);
      if (selectedIndex > -1) {
        if (option.group === 'productBoundaryCondition') {
          this.productBoundaryCondition.removeAt(selectedIndex);
        } else if (option.group === 'premiumDetails') {
          this.premiumDetails.removeAt(selectedIndex);
        }
        else if (option.group === 'featreandReinsate') {
          this.featreandReinsate.removeAt(selectedIndex);
        }
        else if (option.group === 'productServicingAlteration') {
          this.productServicingAlteration.removeAt(selectedIndex);
        }
        else if (option.group === 'terminationCancellation') {
          this.terminationCancellation.removeAt(selectedIndex);
        }
        else if(option.group === 'productBoundary'){
          this.productBoundary.removeAt(selectedIndex);
        }
      }
    }
  }

  findOptionIndex(label: string, group: string): number {
    const formArray = this.dynamicForm.get(`selectedValues.${group}`) as FormArray;
    return formArray.controls.findIndex(group => group.get('label')?.value === label);
  }

  onSubmit() {
    if (this.dynamicForm.invalid) {
      console.log("invalid form ...");
      this.markAllAsTouched();
    } else {
      this.isSubmitted = true;
      console.log("Form submitted ", this.isSubmitted, this.dynamicForm.value);
    }
  }

  next(){
    this.activeTab.emit('Coverage & Info');
  }

  markAllAsTouched() {
    this.productBoundaryCondition.controls.forEach(control => control.markAsTouched());
    this.premiumDetails.controls.forEach(control => control.markAsTouched());
    this.featreandReinsate.controls.forEach(control => control.markAsTouched());
    this.productServicingAlteration.controls.forEach(control => control.markAsTouched());
    this.terminationCancellation.controls.forEach(control => control.markAsTouched());
    this.productBoundary.controls.forEach(control => control.markAsTouched());
  }
}