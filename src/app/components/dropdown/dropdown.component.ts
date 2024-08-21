import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
 import { MotifDropdownModule, MotifIconModule } from '@ey-xd/ng-motif';
 import {IconoirSearch,IconoirBell,IconoirHelpCircle,IconoirSettings,IconoirMoreHoriz } from '@ey-xd/motif-icon';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [MotifDropdownModule,HttpClientModule,CommonModule,MotifIconModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  moreHorizIconFunction(){
    return IconoirMoreHoriz;
  }
}
