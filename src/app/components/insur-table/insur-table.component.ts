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
    { field: 'Name',checkboxSelection: true,headerCheckboxSelection: true,flex:1,filter: true,floatingFilter: true},
    { field : 'Status',cellRenderer: InsuranceStatusComponent,cellClass: "statusCell",headerTooltip: "Active/Expired",minWidth: 100,
      maxWidth: 120,},
    { field: 'InsuranceType',flex:1,filter: true,floatingFilter: true},
    { field: 'PremiumAmount',valueFormatter: (p: any) => '₹ ' + p.value.toLocaleString(),filter: true,floatingFilter: true},
    { field: 'PaymentMethod',filter: true,floatingFilter: true},
    { field: 'Action',cellRenderer: ActionButtonComponent,minWidth: 100,
      maxWidth: 120,}
]
rowData : any
constructor(private tableService : TableService){}

onBtExport() {
  this.gridAPI.exportDataAsExcel();
}

onGridReady(params: GridReadyEvent<any>) {
  this.gridAPI = params.api;

 this.rowData = [{ Name: "Jeffery Madison",Status : 'Active', InsuranceType: "Health", PremiumAmount: 35000,PaymentMethod : "UPI" },
  { Name: "Ford Harry", Status : 'Expired', InsuranceType: "Motor", PremiumAmount: 32000,PaymentMethod: "CC" },
  { Name: "George Madison",Status : 'Expired', InsuranceType: "Business", PremiumAmount: 72000,PaymentMethod : "UPI" },
  { Name: "Jake Paul",Status : 'Active', InsuranceType: "Travel", PremiumAmount: 60000, PaymentMethod : "CC" },
  { Name: "Aston Martin",Status : 'Active', InsuranceType: "Travel", PremiumAmount: 190000 ,PaymentMethod : "Cash"},
  { Name: "George Madison",Status : 'Expired', InsuranceType: "Business", PremiumAmount: 72000,PaymentMethod : "UPI" },
  { Name: "Jake Paul",Status : 'Active', InsuranceType: "Travel", PremiumAmount: 60000, PaymentMethod : "CC" },
  { Name: "Aston Martin",Status : 'Active', InsuranceType: "Travel", PremiumAmount: 190000 ,PaymentMethod : "Cash"},
]
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