import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconoirComputer,IconoirBell, MotifActionIcAccountCircle24px } from '@ey-xd/motif-icon';
import { MotifHeaderModule,MotifFormsModule,MotifIconModule ,MotifBadgeModule,MotifAvatarModule, MotifDropdownModule} from '@ey-xd/ng-motif';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MotifHeaderModule,MotifFormsModule,HttpClientModule,FormsModule,MotifIconModule,MotifBadgeModule,MotifAvatarModule, MotifDropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  toggleShowMenu(){
    return IconoirComputer;

  }
  model:any;
  motifTypeahead:any;
  selected:any;

  bell(){
    return IconoirBell;
  }

  avatar(){
    return MotifActionIcAccountCircle24px;
  }

}
