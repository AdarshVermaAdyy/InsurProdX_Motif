import { Component } from '@angular/core';
import { MotifTableModule } from '@ey-xd/ng-motif';
import { InsuranceStatusComponent } from '../insurance-status/insurance-status.component';

@Component({
  selector: 'app-insur-table',
  standalone: true,
  imports: [MotifTableModule],
  templateUrl: './insur-table.component.html',
  styleUrl: './insur-table.component.scss'
})
export class InsurTableComponent {
  title = 'InsurancePOC';
  tooltipShowDelay = 500;
  columnDefs1 = [
    { field: 'Name'},
    { field : 'Status',cellRenderer: InsuranceStatusComponent,cellClass: "statusCell",headerTooltip: "Active/Expired"},
    { field: 'InsuranceType'},
    { field: 'PremiumAmount'},
    
]
rowData = [{ Name: "Toyota",Status : 'Active', InsuranceType: "Celica", PremiumAmount: 35000 },
  { Name: "Ford", Status : 'Expired', InsuranceType: "Mondeo", PremiumAmount: 32000 },
  { Name: "Porsche",Status : 'Expired', InsuranceType: "Boxster", PremiumAmount: 72000 },
  { Name: "BMW",Status : 'Active', InsuranceType: "M50", PremiumAmount: 60000 },
  { Name: "Aston Martin",Status : 'Active', InsuranceType: "DBX", PremiumAmount: 190000 },]
}
