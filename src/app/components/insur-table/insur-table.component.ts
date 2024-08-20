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
    
    { field: 'PremiumAmount'},
   
    { field: 'CoverType'},
    { field: 'ClaimNumber'},
    {field: "PaymentMethod"}
    
]
rowData = [{ Name: "Toyota",Status : 'Active', InsuranceType: "Celica", PremiumAmount: 35000, CoverType:"Health Insurance", ClaimNumber:"CLM001233", PaymentMethod:"Credit Card" },
  { Name: "Ford", Status : 'Expired', InsuranceType: "Mondeo", PremiumAmount: 32000, CoverType:"Health Insurance", ClaimNumber:"CLM001273", PaymentMethod:"Debit Card" },
  { Name: "Porsche",Status : 'Expired', InsuranceType: "Boxster", PremiumAmount: 72000, CoverType:"Car Insurance", ClaimNumber:"CLM001238",PaymentMethod:"Debit Card"  },
  { Name: "BMW",Status : 'Active', InsuranceType: "M50", PremiumAmount: 60000, CoverType:"Travel Insurance", ClaimNumber:"CLM001233", PaymentMethod:"Debit Card"  },
  { Name: "Aston Martin",Status : 'Active', InsuranceType: "DBX", PremiumAmount: 190000, CoverType:"Life Insurance", ClaimNumber:"CLM001293" , PaymentMethod:"Debit Card" },]
}
