import { Component } from '@angular/core';
import { MotifFooterModule ,MotifButtonModule, MotifIconModule} from '@ey-xd/ng-motif';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MotifFooterModule,MotifButtonModule, MotifIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
