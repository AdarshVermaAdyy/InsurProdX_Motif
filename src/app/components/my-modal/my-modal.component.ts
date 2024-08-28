import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MotifNavigationIcClose24px } from '@ey-xd/motif-icon';
import { MotifButtonModule, MotifFormsModule, MotifIconModule, MotifModal, MotifModalModule } from '@ey-xd/ng-motif';

@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [
    MotifModalModule,
    MotifFormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MotifButtonModule,
    MotifIconModule
  ],
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.scss'
})
export class MyModalComponent {
  @Input() modalHeader = '';
  @Output() formData = new EventEmitter();
  modalForm : FormGroup;

  subCategories = [
    "Term Life Insurance",
    "Whole Life Insurance",
    "Universal Life Insurance",
    "Variable Life Insurance",
    "Final Expense Insurance",
    "Child Life Insurance",
    "Group Life Insurance",
    "Single Life Insurance",
    "Joint Life Insurance"
  ]
  
  constructor(private motifModalService: MotifModal){}

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm(){
    this.modalForm = new FormGroup({
      category: new FormControl('life_insurance'),
      subCategory: new FormControl(this.subCategories[0])
    })
  }


  modalCloseIcon(){
    return MotifNavigationIcClose24px;
  }

  submit(){
    debugger
    // this.formData.emit(this.modalForm.value);
  }

}
