import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor(private httpClient: HttpClient) {}

  // getChartInfo() {
  //   return {
  //     "sales": [
  //       {
  //         "year": 2015,
  //         "amount": 5000,
  //         "colorcode": "green"
  //       },
  //       {
  //         "year": 2016,
  //         "amount": 4000,
  //         "colorcode": "red"
  //       },
  //       {
  //         "year": 2017,
  //         "amount": 500,
  //         "colorcode": "yellow"
  //       },
  //       {
  //         "year": 2018,
  //         "amount": 4500,
  //         "colorcode": "blue"
  //       },
  //       {
  //         "year": 2019,
  //         "amount": 6000,
  //         "colorcode": "purple"
  //       }
  //     ]
  //   };
  //   // this.httpClient.get('http://localhost:3000/sales');
  // }
  loadSalesData() {
    return {
      "sales": [
        {
          "year": 2015,
          "amount": 5000,
          "colorcode": "#FFE600"
        },
        {
          "year": 2016,
          "amount": 4000,
          "colorcode": "#8A8A9B"
        },
        {
          "year": 2017,
          "amount": 500,
          "colorcode": "#23232F"
        },
        {
          "year": 2018,
          "amount": 4500,
          "colorcode": "#DEDEE2"
        },
        {
          "year": 2019,
          "amount": 6000,
          "colorcode": "#3F3F4C"
        }
      ]
    };
    // this.httpClient.get('http://localhost:3000/sales');
  }
}


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChartService {

//   constructor() { }
// }
