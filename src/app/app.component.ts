import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { LayoutService } from '../shared/services/layout.service';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../shared/components/stepper/stepper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, StepperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isWestExpanded = false;

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.isWestExpanded$.subscribe((isExpanded) => {
      this.isWestExpanded = isExpanded;
      console.log(isExpanded)
    });
  }
}
