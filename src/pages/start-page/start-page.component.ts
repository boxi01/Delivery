import { Component } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

  constructor(
    private layoutService: LayoutService,
    private router: Router
  ){}
  
  onClickSend() {
    this.layoutService.toggleWestContainer(true);
    this.router.navigate(['/first-step']);
  }
}
