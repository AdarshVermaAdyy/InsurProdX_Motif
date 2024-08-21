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
          "colorcode": "#FFE600",
          "lableType":"Yearly Sale"
        },
        {
          "year": 2016,
          "amount": 4000,
          "colorcode": "#8A8A9B",
           "lableType":"Yearly Sale"
        },
        {
          "year": 2017,
          "amount": 500,
          "colorcode": "#23232F",
           "lableType":"Yearly Sale"
        },
        {
          "year": 2018,
          "amount": 4500,
          "colorcode": "#DEDEE2",
           "lableType":"Yearly Sale"
        },
        {
          "year": 2019,
          "amount": 6000,
          "colorcode": "#3F3F4C",
           "lableType":"Yearly Sale"
        }
      ]
    };
    // this.httpClient.get('http://localhost:3000/sales');
  }
  loadMonthlySalesData() {
    return {
      "sales": [
        {
          "month": "Jan",
          "amount": 5000,
          "colorcode": "#FFE600",
          "lableType":"Monthly Sale"
        },
        {
          "month": "Feb",
          "amount": 3000,
          "colorcode": "#8A8A9B",
          "lableType":"Monthly Sale"
        },
        {
          "month": "March",
          "amount": 5000,
          "colorcode": "#3F3F4C",
          "lableType":"Monthly Sale"
        },
        {
         "month": "April",
          "amount": 4000,
          "colorcode": "#DEDEE2",
          "lableType":"Monthly Sale"
        },
        // {
        //   "month": "June",
        //   "amount": 3000,
        //   "colorcode": "#FFE600",
        //   "lableType":"Monthly Sale"
        // }
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
