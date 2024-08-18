import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MotifButtonModule, MotifCardModule, MotifTableModule } from '@ey-xd/ng-motif';
import { HttpClientModule } from '@angular/common/http';
import{ BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js/auto';

import { ChartsService } from 'src/app/chartsService/charts.service';
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CanvasJSAngularChartsModule,
    MotifTableModule,HttpClientModule,MotifCardModule,MotifButtonModule,
    BaseChartDirective 

  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements OnInit{
   chartData: any=[];
   lableData: string[]=[];
   realData: number[]=[];
   colourData: string[]=[];
   chart : any;
 constructor( private service: ChartsService) {}

   ngOnInit(): void {
  
    this.loadChartData();
  }
  loadChartData(){
    
    this.chartData = this.service.loadSalesData();
   
    if(this.chartData !== null){
      this.chartData.sales.map((o: { year: string; amount: number; colorcode: string; })=>{
        this.lableData.push(o.year);
        this.realData.push(o.amount);
        this.colourData.push(o.colorcode);
      })
 this.renderBarChart(this.lableData, this.realData, this.colourData);
 this.renderPieChart(this.lableData, this.realData, this.colourData);
 this.renderDoughnutChart(this.lableData, this.realData, this.colourData);
    }
  }
  renderBarChart(labeldata:string[], valuedata:any, colordata:any){
    this.RenderChart(labeldata,valuedata,colordata, 'barchart', 'bar');
  }
  renderPieChart(labeldata:string[], valuedata:any, colordata:any){
    this.RenderChart(labeldata,valuedata,colordata, 'piechart', 'pie');
  }

  renderDoughnutChart(labeldata:string[], valuedata:any, colordata:any){
    this.RenderChart(labeldata,valuedata,colordata, 'doughnutchart', 'doughnut');
  }
  RenderChart(labeldata:string[], valuedata:any, colordata:any, chartId: string, chartType: any){
    const mychar = new Chart (chartId,{
            type : chartType,
            data:{
              labels: labeldata,
              datasets: [
                {
                  label: "Yearly Sales",  
                  data: valuedata,
                  backgroundColor: colordata
                }
              ]
            },
            options:{
              scales: {
                y: {
                  beginAtZero: true
                }
              }

            }

    })
  }

  
}
