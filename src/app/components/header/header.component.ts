import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconoirBell, MotifActionIcAccountCircle24px } from '@ey-xd/motif-icon';
import { MotifHeaderModule, MotifFormsModule, MotifIconModule, MotifAvatarModule, MotifDropdownModule } from '@ey-xd/ng-motif';
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
    MotifDropdownModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  model: any;
  motifTypeahead: any;
  selected: any;
  showMenu = false;

  bell() {
    return IconoirBell;
  }

  avatar() {
    return MotifActionIcAccountCircle24px;
  }

  toggleShowMenu() {
    this.showMenu = !this.showMenu;
  }
}
