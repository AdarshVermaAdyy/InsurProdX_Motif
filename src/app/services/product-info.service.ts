import { group } from '@angular/animations';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  private availableOptions = [
    { id: 1, label: "Entity Age", type: "range", min: 18, max: 50, group: 'productBoundaryCondition' },
    { id: 2, label: "Maturity Age", type: "range", min: 10, max: 15, group: 'productBoundaryCondition' },
    { id: 3, label: "Premium Payment Frequency", type: 'dropdown', options: ['Half Yearly', 'Yearly', 'Other'], group: 'productBoundaryCondition', defaultValue:'Yearly' },
    { id: 4, label: "PT (In Year)", type: 'dropdown', options: ['10', '20', '30'], group: 'productBoundaryCondition' },
    { id: 5, label: "Premium", type: "range", min: 1500, max: 300000, group: 'productBoundaryCondition' },
    { id: 6, label: "PT (In Year)", type: 'dropdown', options: ['10', '20', '30'], group: 'productBoundaryCondition' },
    { id: 7, label: "Sum Assured", type: "range", min: 1500, max: 3000, group: 'productBoundaryCondition' },
    // { id: 7, label: "Premium Payment Type", type: "radio", options: ['Regular', 'Limited'], group: 'productBoundaryCondition' },
    // { id: 5, label: "Gender", type: 'dropdown', options: ['Male', 'Female', 'Other'], group: 'productBoundaryCondition' },
    // { id: 6, label: "Username", type: "text", value: "ahakal", group: 'productBoundaryCondition' },
    { id: 8, label: "Grace Period", type: 'dropdown', options: ['15', '30', '45'], group: 'productBoundaryCondition' },
    { id: 9, label: "BackDating", type: 'dropdown', options: ['Yes', 'No'], group: 'productBoundaryCondition' },
    { id: 9, label: "Change of Name", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 10, label: "Appointee Change", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 11, label: "Letters", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 12, label: "Nach Registration", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 13, label: "Change of Owner", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 14, label: "Change of Nominee", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 15, label: "Assignment/Reassignment", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 16, label: "Change of Address", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 17, label: "Change of Freq", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 18, label: "Change of Contact Details", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 19, label: "Change in PAN", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 20, label: "Duplicate policy Number", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 21, label: "EIA", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 22, label: "Change in Occupation", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 23, label: "Change of PEP", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 24, label: "Change in UID", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 25, label: "Certification of Existance", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 26, label: "Policy Search UI", type: 'dropdown', options: ['Yes', 'No'], group: 'premiumDetails' },
    { id: 27, label: "Lapse", type: 'dropdown', options: ['LAPSE30', 'LAPSE20'], group: 'featreandReinsate' },
    { id: 28, label: "Revival", type: 'dropdown', options: ['REVV30', 'REVV20'], group: 'featreandReinsate' },
    { id: 29, label: "Increase/Decrease in Service", type: 'dropdown', options: ['Allowed4', 'Allowed6'], group: 'productServicingAlteration' },
    { id: 30, label: "Change of DOB", type: 'dropdown', options: ['Allowed4', 'Allowed6'], group: 'productServicingAlteration' },
    { id: 31, label: "Change of Gender", type: 'dropdown', options: ['Allowed', 'NotAllowed'], group: 'productServicingAlteration' },
    { id: 32, label: "Change of PT/FT", type: 'dropdown', options: ['Allowed', 'NotAllowed'], group: 'productServicingAlteration' },
    { id: 33, label: "Change of Premium", type: 'dropdown', options: ['Allowed', 'NotAllowed'], group: 'productServicingAlteration' },
    { id: 34, label: "Free Look Period Cancell", type: 'dropdown', options: ['FP15', 'FP16'], group: 'terminationCancellation' },
    
    { id: 35, label: "Death Claim", type: 'dropdown', options: ['DLUMP', 'DLUGP'], group: 'terminationCancellation' },
    { id: 36, label: "Surrender", type: 'dropdown', options: ['SUR1', 'SUR2'], group: 'terminationCancellation' },
    { id: 37, label: "Maturity", type: 'dropdown', options: ['M0BEN', 'M1BEN'], group: 'terminationCancellation' },
    
    { id: 37, label: "Policy Cancellation", type: 'dropdown', options: ['POLC', 'POLNA'], group: 'terminationCancellation' },
    
    
    
    
    
    
    
    
    
    
   // { id: 10, label: "Premium Payment Type", type: "radio", options: ['Regular', 'Limited'], group: 'premiumDetails' }
  ];

  constructor(private fb: FormBuilder) {}

  getAvailableOptions() {
    return this.availableOptions;
  }

  createDynamicFormGroup(label: string, type: string, config: any) {
    const controls: any = {
      label: [label],
      type: [type]
    };

    if (type === 'range') {
      controls['min'] = [config.min, Validators.required];
      controls['max'] = [config.max, Validators.required];
    } else if (type === 'dropdown') {
      const defaultValue = config.defaultValue || (config.options && config.options[0]) || '';
      controls['value'] = [defaultValue, Validators.required];
      controls['options'] = [config.options || []];
    } else if (type === 'text') {
      controls['value'] = [config.value || '', Validators.required];
    } else if (type === 'radio') {
      controls['options'] = [config.options || []];
      controls['value'] = [config.value || '', Validators.required];
    }

    return this.fb.group(controls);
  }

  initializeForm(): FormGroup {
    const form = this.fb.group({
      options: this.fb.array(this.availableOptions.map(option => new FormControl(false))),
      selectedValues: this.fb.group({
        productBoundaryCondition: this.fb.array([]),
        premiumDetails: this.fb.array([]),
        featreandReinsate: this.fb.array([]),
        productServicingAlteration: this.fb.array([]),
        terminationCancellation: this.fb.array([]),

      })
    });

    this.updateFormGroups(form);
    return form;
  }

  updateFormGroups(form: FormGroup) {
    const productBoundaryConditions = this.availableOptions
      .filter(option => option.group === 'productBoundaryCondition')
      .map(option => this.createDynamicFormGroup(option.label, option.type, option));

    const premiumDetails = this.availableOptions
      .filter(option => option.group === 'premiumDetails')
      .map(option => this.createDynamicFormGroup(option.label, option.type, option));

      const featreandReinsate = this.availableOptions
      .filter(option => option.group === 'featreandReinsate')
      .map(option => this.createDynamicFormGroup(option.label, option.type, option));

      const productServicingAlteration = this.availableOptions
      .filter(option => option.group === 'productServicingAlteration')
      .map(option => this.createDynamicFormGroup(option.label, option.type, option));
      
      const terminationCancellation = this.availableOptions
      .filter(option => option.group === 'terminationCancellation')
      .map(option => this.createDynamicFormGroup(option.label, option.type, option));

    const productBoundaryFormArray = form.get('selectedValues.productBoundaryCondition') as FormArray;
    const premiumDetailsFormArray = form.get('selectedValues.premiumDetails') as FormArray;
    const featreandReinsateFormArray = form.get('selectedValues.featreandReinsate') as FormArray;
    const productServicingAlterationArray = form.get('selectedValues.productServicingAlteration') as FormArray;
    const terminationCancellationArray = form.get('selectedValues.terminationCancellation') as FormArray;

    productBoundaryFormArray.clear();
    premiumDetailsFormArray.clear();
   featreandReinsateFormArray.clear();
   productServicingAlterationArray.clear();
   terminationCancellationArray.clear();
   
    productBoundaryConditions.forEach(group => productBoundaryFormArray.push(group));
    premiumDetails.forEach(group => premiumDetailsFormArray.push(group));
   featreandReinsate.forEach(group => featreandReinsateFormArray.push(group));
    productServicingAlteration.forEach(group => productServicingAlterationArray.push(group));
    terminationCancellation.forEach(group=> terminationCancellationArray.push(group));
  }
}


