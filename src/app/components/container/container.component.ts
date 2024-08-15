import { Component } from '@angular/core';
import { MotifIconModule,MotifCardModule } from '@ey-xd/ng-motif';
import {MotifMapsIcDirectionsCar24px,MotifMapsIcFlight24px,MotifMapsIcDirectionsBike24px} from '@ey-xd/motif-icon';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [MotifIconModule,MotifCardModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  myIconFunction(){
    return MotifMapsIcDirectionsCar24px;

  }
}
