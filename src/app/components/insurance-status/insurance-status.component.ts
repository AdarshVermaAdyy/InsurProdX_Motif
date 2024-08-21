import { Component } from '@angular/core';
import { MotifChipModule } from '@ey-xd/ng-motif';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-insurance-status',
  standalone: true,
  imports: [MotifChipModule],
  templateUrl: './insurance-status.component.html',
  styleUrl: './insurance-status.component.scss'
})
export class InsuranceStatusComponent implements ICellRendererAngularComp {
  public value!:string;
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.refresh(params)
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    // this.value = params.value == 'Active'? 'tick-in-circle':'cross-in-circle';
    this.value = params.value;
    return true;
  }
}
