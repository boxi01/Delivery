import { Component } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

  constructor(private layoutService: LayoutService){}
  
  onClickSend() {
    this.layoutService.toggleWestContainer(true);
  }
}
