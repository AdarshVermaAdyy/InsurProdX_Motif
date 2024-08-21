import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IconoirSearch,IconoirBell,IconoirHelpCircle,IconoirSettings,IconoirMoreHoriz } from '@ey-xd/motif-icon';
import { MotifHeaderModule,MotifFormsModule,MotifIconModule ,MotifBadgeModule,MotifAvatarModule, MotifVerticalNavigationModule, MotifCardModule} from '@ey-xd/ng-motif';
import { IconoirComputer,IconoirMultiplePages, MotifActionIcHome24px,IconoirFavouriteBook, MotifActionIcSettings24px } from '@ey-xd/motif-icon';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MotifHeaderModule,CommonModule, DashboardComponent, MotifFormsModule, FormsModule, ReactiveFormsModule, HttpClientModule, MotifCardModule, MotifHeaderModule, MotifVerticalNavigationModule, MotifIconModule,DashboardComponent, MotifAvatarModule, FormsModule, CommonModule, RouterModule,HttpClientModule,FormsModule,MotifIconModule,MotifBadgeModule,MotifAvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  model:any;
  motifTypeahead:any;
  selected:any;
  showMenu:boolean = false;
  items=[{
    label: 'Dashboard',
    icon:  function(){
      return MotifActionIcHome24px;
    },
    exact: false,
  },
  {
    label: 'Favourites',
    icon:  function(){
      return IconoirFavouriteBook;
    },
    exact: false,

  },
  {
    label: 'Settings',
    icon:  function(){
      return MotifActionIcSettings24px;
    },
    exact: false,

  },
  {
    label: 'Pages',
    icon:  function(){
      return IconoirMultiplePages;
    },
    exact: false,

  }
];
  search(){
    return IconoirSearch;


  }
  moreHoriz(){
    return IconoirMoreHoriz;

  }
  settings(){
    return IconoirSettings;

  }
  helpCircle(){
    return IconoirHelpCircle;

  }
  bell(){
    return IconoirBell;

  }

  toggleShowMenu(){
    this.showMenu = !this.showMenu;
  }
  myIconFunction() {
    return MotifActionIcHome24px;
  }
  top:any;
  bottom:any;
  contextSwitcher:any;
  onLinkPress(e:any,words:any){

  }
}
