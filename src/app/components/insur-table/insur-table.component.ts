import { Component, ElementRef, ViewChild } from '@angular/core';
import { MotifIconModule, MotifTableCellRendererComponent, MotifTableHeaderRendererComponent, MotifTableModule } from '@ey-xd/ng-motif';
import { InsuranceStatusComponent } from '../insurance-status/insurance-status.component';
import { CellClassRules, GridApi, GridReadyEvent, ICellRendererParams, ModuleRegistry } from 'ag-grid-community';
import { TableService } from 'src/app/services/table.service';
import { ExcelExportModule } from 'ag-grid-enterprise';
import { IconoirDownloadDataWindow } from '@ey-xd/motif-icon';
import { ActionButtonComponent } from '../action-button/action-button.component';


ModuleRegistry.registerModules([ExcelExportModule])

@Component({
  selector: 'app-insur-table',
  standalone: true,
  imports: [MotifTableModule,MotifIconModule],
  templateUrl: './insur-table.component.html',
  styleUrl: './insur-table.component.scss'
})
export class InsurTableComponent {

  tooltipShowDelay = 500;
  private gridAPI : GridApi<any>;
  @ViewChild('dropdownTemplate') dropdownTemplate : ElementRef;
 
  columnDefs1 = [
    { field: 'Name'},
    { field : 'Status',cellRenderer: InsuranceStatusComponent,cellClass: "statusCell",headerTooltip: "Active/Expired"},
    { field: 'InsuranceType'},
    { field: 'PremiumAmount',valueFormatter: (p: any) => '₹ ' + p.value.toLocaleString(),filter: true,floatingFilter: true},
    { field: 'Action',cellRenderer: ActionButtonComponent}
]
rowData : any
constructor(private tableService : TableService){}

onBtExport() {
  this.gridAPI.exportDataAsExcel();
}

onGridReady(params: GridReadyEvent<any>) {
  this.gridAPI = params.api;

 this.rowData = [{ Name: "Toyota",Status : 'Active', InsuranceType: "Celica", PremiumAmount: 35000 },
  { Name: "Ford", Status : 'Expired', InsuranceType: "Mondeo", PremiumAmount: 32000 },
  { Name: "Porsche",Status : 'Expired', InsuranceType: "Boxster", PremiumAmount: 72000 },
  { Name: "BMW",Status : 'Active', InsuranceType: "M50", PremiumAmount: 60000 },
  { Name: "Aston Martin",Status : 'Active', InsuranceType: "DBX", PremiumAmount: 190000 },]
}


myIconFunction(){
  return IconoirDownloadDataWindow;
}
}

function statusRenderer(params : ICellRendererParams){
  return '<span class="rag-element">' + params.value + "</span>";
}

const statusCellClassRules: CellClassRules = {
  "rag-green-outer": (params) => params.value == 'Active',
  "rag-red-outer": (params) => params.value == 'Expired',
};