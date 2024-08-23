import { HttpClientModule } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconoirBell, IconoirFavouriteBook, IconoirHelpCircle, IconoirMoreHoriz, IconoirMultiplePages, IconoirSearch, IconoirSettings, MotifActionIcHome24px, MotifActionIcSettings24px, MotifContentIcAdd24px } from '@ey-xd/motif-icon';
import { MotifHeaderModule, MotifFormsModule, MotifIconModule, MotifAvatarModule, MotifDropdownModule, MotifBadgeModule, MotifVerticalNavigationModule, MotifCardModule, MotifModalModule, MotifModal, MotifModalConfig, ModalSizes } from '@ey-xd/ng-motif';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MyModalComponent } from '../my-modal/my-modal.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MotifHeaderModule,
    CommonModule, 
    DashboardComponent, 
    MotifFormsModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule, 
    MotifCardModule, 
    MotifHeaderModule, 
    MotifVerticalNavigationModule, 
    MotifIconModule,
    DashboardComponent, 
    MotifAvatarModule, 
    FormsModule, 
    CommonModule, 
    RouterModule,
    HttpClientModule,
    FormsModule,
    MotifBadgeModule,
    MotifAvatarModule,
    MotifDropdownModule,
    MyModalComponent,
    MotifModalModule
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
    label: 'Create a Product',
    icon:  function(){
      return MotifContentIcAdd24px;
    },
    action: () => {
      this.openModal();
    },
    exact: false,
  },
  {
    label: 'Favourites',
    icon:  function(){
      return IconoirFavouriteBook;
    },
    action: () => {
      
    },
    exact: false,

  },
  {
    label: 'Settings',
    icon:  function(){
      return MotifActionIcSettings24px;
    },
    action: () => {
      
    },
    exact: false,

  },
  {
    label: 'Pages',
    icon:  function(){
      return IconoirMultiplePages;
    },
    action: () => {
      
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

  modalConfig:MotifModalConfig = {
    size: ModalSizes.CUSTOM,
    minWidth: 500
  }

  openModal(){
    this.modaleheader = "Create Using Template"
    this.motifModalService.open(this.myModal, this.modalConfig);
  }

  getModalFormData(event: any){
    debugger
    if(event){
      this.motifModalService.closeAll()
    }
  }
  
}
