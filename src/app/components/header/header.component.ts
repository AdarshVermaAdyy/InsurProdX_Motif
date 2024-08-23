import { HttpClientModule } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { IconoirBell, IconoirEditPencil, IconoirFavouriteBook, IconoirGridPlus, IconoirHelpCircle, IconoirLogOut, IconoirMoreHoriz, IconoirMultiplePages, IconoirProfileCircle, IconoirSearch, IconoirSettings, MotifActionIcAccountCircle24px, MotifActionIcHome24px, MotifActionIcSettings24px } from '@ey-xd/motif-icon';
import { MotifHeaderModule, MotifFormsModule, MotifIconModule, MotifAvatarModule, MotifDropdownModule, MotifBadgeModule, MotifVerticalNavigationModule, MotifCardModule, MotifModalModule, MotifModal } from '@ey-xd/ng-motif';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MyModalComponent } from '../my-modal/my-modal.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MotifHeaderModule,CommonModule, DashboardComponent, MotifFormsModule, FormsModule, ReactiveFormsModule, HttpClientModule, MotifCardModule, MotifHeaderModule, MotifVerticalNavigationModule, MotifIconModule,DashboardComponent, MotifAvatarModule, FormsModule, CommonModule, RouterModule,HttpClientModule,FormsModule,MotifIconModule,MotifBadgeModule,MotifAvatarModule,MotifDropdownModule,
    MyModalComponent,MotifModalModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  @ViewChild('myModal') myModal : TemplateRef<any>;

  model:any;
  motifTypeahead:any;
  selected:any;
  showMenu:boolean = false;
  modaleheader : string = "";
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
constructor(private motifModalService : MotifModal){}
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
  openModal(){
    this.modaleheader = "Create Using Template"
    this.motifModalService.open(this.myModal);
  }
}
