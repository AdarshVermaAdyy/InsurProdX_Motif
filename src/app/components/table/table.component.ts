import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MotifContentSwitcherModule, MotifTableModule } from '@ey-xd/ng-motif';
import { MotifCardModule,MotifButtonModule } from '@ey-xd/ng-motif';
import { Chart, registerables } from 'chart.js';
import { InsurTableComponent } from "../insur-table/insur-table.component";
import { MotifIconModule } from '@ey-xd/ng-motif';
import {MotifMapsIcDirectionsCar24px,IconoirViewGrid, MotifMapsIcLocalTaxi24px,MotifActionIcCardTravel24px,MotifActionIcAccessibility24px ,MotifActionIcPets24px,IconoirBuilding,MotifSocialIcPeople24px,MotifMapsIcFlight24px,IconoirUmbrella,MotifMapsIcDirectionsBike24px,IconoirHealthcare} from '@ey-xd/motif-icon';
import { Router, RouterModule } from '@angular/router';
import { ButtonSizes } from '@ey-xd/ng-motif'
Chart.register(...registerables)
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MotifTableModule,MotifContentSwitcherModule, HttpClientModule, MotifCardModule, MotifButtonModule, InsurTableComponent,MotifIconModule, RouterModule],

  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  chart:any;
  myInvestment(){
    return MotifActionIcCardTravel24px;
  }
  mylifeFunction(){
    return MotifActionIcAccessibility24px;
  }
  myIconFunction(){
    return MotifMapsIcDirectionsCar24px;
  }
  myflightFunction(){
    return MotifMapsIcFlight24px;
  }
  mybikeFunction(){
    return MotifMapsIcDirectionsBike24px;
  }
  myIconHealth(){
    return IconoirHealthcare;
  }
  mytermFunction(){
    return IconoirUmbrella;
  }
  myfFunction(){
    return MotifSocialIcPeople24px;

  }
  myBussinessFunction(){
    return IconoirBuilding;
  }
  mypetFunction(){
    return MotifActionIcPets24px;
  }
  mytaxiFunction(){
    return MotifMapsIcLocalTaxi24px;
  }
  myviewFunction(){
    return IconoirViewGrid;
  }

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
