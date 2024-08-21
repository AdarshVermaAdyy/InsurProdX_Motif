import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { IconoirBell, IconoirEditPencil, IconoirGridPlus, IconoirLogOut, IconoirProfileCircle, IconoirSettings, MotifActionIcAccountCircle24px } from '@ey-xd/motif-icon';
import { MotifHeaderModule, MotifFormsModule, MotifIconModule, MotifAvatarModule, MotifDropdownModule, MotifBadgeModule } from '@ey-xd/ng-motif';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MotifHeaderModule,
    MotifFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MotifIconModule,
    MotifAvatarModule,
    MotifDropdownModule,RouterModule,MotifBadgeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  model: any;
  motifTypeahead: any;
  selected: any;
  showMenu = false;
constructor(private router : Router){}
  bell() {
    return IconoirBell;
  }

  avatar() {
    return IconoirProfileCircle;
  }

  toggleShowMenu() {
    this.showMenu = !this.showMenu;
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
  registerClick(){
    console.log('register')
    this.router.navigate(['/register']);
  }
  registerIconFunction(){
    return IconoirGridPlus;
  }
}
