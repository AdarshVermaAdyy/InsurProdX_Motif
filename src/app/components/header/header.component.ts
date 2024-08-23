import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { IconoirBell,IconoirPrivacyPolicy, IconoirEditPencil, IconoirFavouriteBook, IconoirGridPlus, IconoirHelpCircle, IconoirLogOut, IconoirMoreHoriz, IconoirMultiplePages, IconoirProfileCircle, IconoirSearch, IconoirSettings, MotifActionIcAccountCircle24px, MotifActionIcHome24px, MotifActionIcSettings24px } from '@ey-xd/motif-icon';
import { MotifHeaderModule, MotifFormsModule, MotifIconModule, MotifAvatarModule, MotifDropdownModule, MotifBadgeModule, MotifVerticalNavigationModule, MotifCardModule } from '@ey-xd/ng-motif';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MotifHeaderModule,CommonModule, DashboardComponent, MotifFormsModule, FormsModule, ReactiveFormsModule, HttpClientModule, MotifCardModule, MotifHeaderModule, MotifVerticalNavigationModule, MotifIconModule,DashboardComponent, MotifAvatarModule, FormsModule, CommonModule, RouterModule,HttpClientModule,FormsModule,MotifIconModule,MotifBadgeModule,MotifAvatarModule,MotifDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  constructor(private router:Router){}
  open:boolean = false
  model:any;
  motifTypeahead:any;
  selected:any;
  showMenu:boolean = false;
  items=[

  // {
  //   label: 'Favourites',
  //   icon:  function(){
  //     return IconoirFavouriteBook;
  //   },
  //   exact: false,

  // },
  // {
  //   label: 'Settings',
  //   icon:  function(){
  //     return MotifActionIcSettings24px;
  //   },
  //   exact: false,

  // },
  // {
  //   label: 'Pages',
  //   icon:  function(){
  //     return IconoirMultiplePages;
  //   },
  //   exact: false,

  // },
  // {
  //   label: 'Create a Product',
  //   icon:  function(){
  //     return MotifActionIcHome24px;
  //   },
  //   exact: false,
  // },
  // {
  //   label: 'Modify a Product',
  //   icon:  function(){
  //     return IconoirFavouriteBook;
  //   },
  //   exact: false,

  // },
  {
    label: 'FAQ',
    icon:  function(){
      return MotifActionIcSettings24px;
    },
    exact: false,

  },
  {
    label: 'Push Notification',
    icon:  function(){
      return IconoirMultiplePages;
    },
    exact: false,

  },
  {
    label: 'Dashboard',
    icon:  function(){
      return MotifActionIcHome24px;
    },
    exact: false,
  },
];
  search(){
    return IconoirSearch;


  }
  policy(){
    return IconoirPrivacyPolicy;
  }
  moreHoriz(){
    return IconoirMoreHoriz;

  }
  editProfileFunction(){
    return IconoirEditPencil;
  }
  viewProfileFunction(){
    return IconoirProfileCircle;
  }
  settingFunction(){
    return IconoirSettings;
  }
  logoutFunction(){

    return IconoirLogOut;


  }
  logout(){
    this.router.navigate(['/']);
  }
  registerClick(){
    console.log('register')
    this.router.navigate(['/register']);
  }
  registerIconFunction(){
    return IconoirGridPlus;
  }
  avatar() {
    return MotifActionIcAccountCircle24px;
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
  onLinkPress1(e:any,Words:any){

  }
}
