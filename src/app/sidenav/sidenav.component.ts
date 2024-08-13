import { Component } from '@angular/core';
import { MotifVerticalNavigationModule } from '@ey-xd/ng-motif';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MotifFormsModule, MotifIconModule,MotifAvatarModule } from '@ey-xd/ng-motif';
import { MotifCardModule } from '@ey-xd/ng-motif';
import { MotifHeaderModule } from '@ey-xd/ng-motif';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent } from "../table/table.component";
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MotifFormsModule, FormsModule, ReactiveFormsModule, HttpClientModule, MotifCardModule, MotifHeaderModule, FooterComponent, HeaderComponent, MotifVerticalNavigationModule, MotifIconModule, MotifAvatarModule, FormsModule, CommonModule, RouterModule, TableComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  showMenu:any;
  items=[];
  toggleShowMenu(){
    show:Boolean;
  }
  top:any;
  bottom:any;
  contextSwitcher:any;
  onLinkPress(e:any,words:any){

  }

}
