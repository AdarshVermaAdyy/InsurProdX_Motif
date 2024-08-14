import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MotifFormsModule, MotifIconModule,MotifAvatarModule } from '@ey-xd/ng-motif';
import { MotifCardModule } from '@ey-xd/ng-motif';
import { MotifHeaderModule } from '@ey-xd/ng-motif';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { MotifVerticalNavigationModule } from '@ey-xd/ng-motif';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from "../sidenav/sidenav.component";
import { AreagraphComponent } from "../areagraph/areagraph.component";
import { PiechartComponent } from "../piechart/piechart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MotifFormsModule, FormsModule, ReactiveFormsModule, HttpClientModule, MotifCardModule, MotifHeaderModule, FooterComponent, HeaderComponent, MotifVerticalNavigationModule, MotifIconModule, MotifAvatarModule, FormsModule, CommonModule, RouterModule, SidenavComponent, AreagraphComponent, PiechartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent {

  model:any;
  typeAheadList:any;
  items=[];
  label: any;
  icon?: string;
  routerLink?: string | string[];
  exact?: boolean;
   subMenu?: [12];
  showMenu:any;
  clearValue(){}
  toggleShowMenu(){}

}

