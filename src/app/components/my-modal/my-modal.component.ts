import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalSizes, MotifFormsModule, MotifModal, MotifModalModule } from '@ey-xd/ng-motif';

@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [MotifModalModule,MotifFormsModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.scss'
})
export class MyModalComponent {
  @Input() modalHeader : string;
  modalForm : FormGroup;


  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm(){
   
   
  }

}
