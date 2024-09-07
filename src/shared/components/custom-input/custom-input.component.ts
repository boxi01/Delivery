import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss'
})
export class CustomInputComponent {

  @Input() name: string = '';
  @Input() label: string = '';

}
