import { Component } from '@angular/core';
import { IconoirEdit, IconoirMoreVert, IconoirPageSearch, IconoirTrash } from '@ey-xd/motif-icon';
import { MotifDropdownModule, MotifIconModule } from '@ey-xd/ng-motif';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

interface CustomButtonParams extends ICellRendererParams {
  onClick: () => void;
}
@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [MotifIconModule,MotifDropdownModule],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent implements ICellRendererAngularComp{
  onClick!: () => void;
  agInit(params: CustomButtonParams): void {
    this.onClick = params.onClick;
}
refresh(params: CustomButtonParams) {
    return true;
}
  moreHorizIconFunction(){
    return IconoirMoreVert;
  }

  viewRow(){
    return IconoirPageSearch;
  }
  editRow(){
    return IconoirEdit
  }
  deleteRow(){
    return IconoirTrash
  }
}
