import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  title = 'project';
  headerFooter: boolean = false

  constructor(private router: Router) {
  }

  ngOnInit(){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
     this.headerFooter = (event.url === '/' || event.url === '/signup');

      }
    })
  }
}
