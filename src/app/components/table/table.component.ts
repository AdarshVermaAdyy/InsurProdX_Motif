import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MotifTableModule } from '@ey-xd/ng-motif';
import { MotifCardModule,MotifButtonModule } from '@ey-xd/ng-motif';
import { Chart, registerables } from 'chart.js';
import { InsurTableComponent } from "../insur-table/insur-table.component";
import { Router, RouterModule } from '@angular/router';
Chart.register(...registerables)
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MotifTableModule, HttpClientModule,RouterModule, MotifCardModule, MotifButtonModule, InsurTableComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  chart:any;
public  configs = {
  type: 'doughnut',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }
};
  public config:any = {
    type: 'bar',
    data: {
      labels:['JAN','FEB','MAR','APRIL'],
      datasets:[{
        label:'Sales',
        data:['400','276','372','588'],
        backgroudColor:'blue'
      },
      {
        label:'Growth',
        data:['467','76','772','588'],
        backgroudColor:'red'
      },
      {
        label:'Net Revenue',
        data:['467','276','532','188'],
        backgroudColor:'green'
      }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  ngOnInit():void{
    this.chart = new Chart('MyChart',this.config)
    //this.chart = new Chart('Mycharts',this.configs)
  }


}
