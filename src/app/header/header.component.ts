import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconoirComputer,IconoirSearch,IconoirBell,IconoirHelpCircle,IconoirSettings,IconoirMoreHoriz } from '@ey-xd/motif-icon';
import { MotifHeaderModule,MotifFormsModule,MotifIconModule ,MotifBadgeModule,MotifAvatarModule} from '@ey-xd/ng-motif';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MotifHeaderModule,MotifFormsModule,HttpClientModule,FormsModule,MotifIconModule,MotifBadgeModule,MotifAvatarModule,],
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
  myIconFunction() {
    return IconoirComputer;
  }

}
