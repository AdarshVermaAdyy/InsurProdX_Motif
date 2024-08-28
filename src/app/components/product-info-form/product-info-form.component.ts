import { group } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
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

  get premiumDetails(): FormArray {
    return this.dynamicForm.get('selectedValues.premiumDetails') as FormArray;
  }
  get  featreandReinsate(): FormArray {
    return this.dynamicForm.get('selectedValues.featreandReinsate') as FormArray;
  }
  get  terminationCancellation(): FormArray {
    return this.dynamicForm.get('selectedValues.terminationCancellation') as FormArray;
  }
  
  get  productServicingAlteration(): FormArray {
    return this.dynamicForm.get('selectedValues.productServicingAlteration') as FormArray;
  }
  addCheckboxes() {
    this.availableOptions.forEach((option, index) => {
      if (!this.isDefaultField(option)) {
        const control = this.options.at(index) as FormControl;
        control.setValue(false);
      }
    });
  }

  isDefaultField(option: any): boolean {
    return ['Entity Age', 'Maturity Age', 'Premium Payment Frequency', 'PT (In Year)', 'Gender', 'Username', 'Premium Payment Type'].includes(option.label);
  }

  onCheckboxChange(e: any, index: number) {
    const option = this.availableOptions[index];
    const selectedGroup = this.formService.createDynamicFormGroup(option.label, option.type, option);

    if (e.target.checked) {
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
      }
    }
  }

  findOptionIndex(label: string, group: string): number {
    const formArray = this.dynamicForm.get(`selectedValues.${group}`) as FormArray;
    return formArray.controls.findIndex(group => group.get('label')?.value === label);
  }

  onSubmit() {
    if (this.dynamicForm.invalid) {
      this.markAllAsTouched();
    } else {
      this.isSubmitted = true;
      console.log("Form submitted ", this.isSubmitted, this.dynamicForm.value);
    }
  }
  next(){
    console.log("Next click");
  }

  markAllAsTouched() {
    this.productBoundaryCondition.controls.forEach(control => control.markAsTouched());
    this.premiumDetails.controls.forEach(control => control.markAsTouched());
    this.featreandReinsate.controls.forEach(control => control.markAsTouched());
    this.productServicingAlteration.controls.forEach(control => control.markAsTouched());
    this.terminationCancellation.controls.forEach(control => control.markAsTouched());
  }
}