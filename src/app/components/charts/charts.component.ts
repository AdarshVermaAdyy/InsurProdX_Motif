import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MotifButtonModule, MotifCardModule, MotifTableModule } from '@ey-xd/ng-motif';
import { HttpClientModule } from '@angular/common/http';
import{ BaseChartDirective } from 'ng2-charts';
import { Chart, Legend, plugins } from 'chart.js/auto';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ChartsService } from 'src/app/chartsService/charts.service';
import { callback } from 'chart.js/dist/helpers/helpers.core';
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CanvasJSAngularChartsModule,MotifTableModule,HttpClientModule,MotifCardModule,MotifButtonModule, DashboardComponent, BaseChartDirective ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements OnInit{
   chartData: any=[];
   monthltyChart:any=[];
   lableData: string[]=[];
   lableType: any=[];
   realData: number[]=[];
   colourData: string[]=[];
   barlableData: string[]=["JAN", "FEB", "MARCH", "APRIL", "MAY"];
   monthlylableType: any=[];
   monthlyrealData: number[]=[];
   monthlycolourData: string[]=[];
   chart : any;
   
 constructor( private service: ChartsService) {}

   ngOnInit(): void {
  
    this.loadChartData();
  }
  loadChartData(){
    
    this.chartData = this.service.loadSalesData();
     this.monthltyChart = this.service.loadMonthlySalesData();
    if(this.chartData !== null){
      this.chartData.sales.map((o: any)=>{
        this.lableData.push(o.year);
        this.realData.push(o.amount);
        this.colourData.push(o.colorcode);
        this.lableType.push(o. lableType);
      })

      // if(this.monthltyChart !== null){
      //     this.monthltyChart.sales.map((result:any)=>{
      //       this.monthlylableData.push(re)
      //     })
      // }
 this.renderBarChart(this.barlableData, this.realData, this.colourData, this.lableType);
 this.renderPieChart(this.lableData, this.realData, this.colourData, this.lableType);
 this.renderDoughnutChart(this.lableData, this.realData, this.colourData, this.lableType);
 this.renderLineChart(this.lableData, this.realData, this.colourData,  this.lableType);
    }
  }
  renderBarChart(labeldata:string[], valuedata:any, colordata:any, lableType:any){
    console.log("labelData, valueData, coloru , lableType"+ labeldata, valuedata, colordata, lableType);
    this.RenderChart(labeldata,valuedata,colordata, lableType, 'barchart', 'bar');
    
  }
  renderPieChart(labeldata:string[], valuedata:any, colordata:any, lableType:any){
    this.RenderChart(labeldata,valuedata,colordata,lableType, 'piechart', 'pie');
  }

  renderDoughnutChart(labeldata:string[], valuedata:any, colordata:any, lableType:any){
    this.RenderChart(labeldata,valuedata,colordata,lableType, 'doughnutchart', 'doughnut');
  }
  renderLineChart(labeldata:string[], valuedata:any, colordata:any, lableType:any){
    this.RenderChart(labeldata,valuedata,colordata,lableType, 'linechart', 'line');
  }

  RenderChart(labeldata:string[], valuedata:any, colordata:any, lableType:any, chartId: string, chartType: any){
    console.log("here is lable Data: "+ labeldata);
    let chartsaleType : any= "Yearly Sales";
    let chartOpiton : any ={
      responsive:true,
      maintainAspectRatio:false,
      plugins:{
        Legend: {
          display: true,
        }
      }
    };
    if(chartType === 'bar'){
      chartsaleType = "Monthly Sales",
      chartOpiton = {
        ...chartOpiton,
        scales: {
          x: {
            grid: {
              display :false
            }
          },
          y: {
            grid: {
              display:false
            },
            beginAtZero: true
          }
        },
      }
    }
    const mychar = new Chart (chartId,{
            type : chartType,
            data:{
              labels: labeldata,
              datasets: [
                {
                  label: chartsaleType,
                  data: valuedata,
                  backgroundColor: colordata
                }
              ]
            },
            options:{chartOpiton,
            //   tooltip: {
            //     callbacks: {
            //       label: function(tooltipItem:any){
            //         const datasetIndex = tooltipItem.datasetIndex;
            //         const dataset = tooltipItem.chart.data.datasets[datasetIndex];
            //         const dataIndex = tooltipItem.dataIndex;
            //         const  labelType = dataset.lable;
            //         const dataValue= dataset.data[dataIndex]
            //         return `${labelType}: ${dataValue}`
            //         // if(chartType === 'bar'){
            //         //   return `${datasetLable} :${tooltipItem.raw}`;
            //         // }else if(chartType === 'pie'){
            //         // return `${datasetLable} ${dataLable}`;
            //         // }
            //         // else{
            //         //   return `${dataLable} : ${tooltipItem.raw}`
            //         // }
            //     }
            //   }
            // },
            // afterLable: function(){
            //   return '';
            // }
          }
    });
  }

  
}
