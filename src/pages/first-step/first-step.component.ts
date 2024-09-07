import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from '../../shared/components/custom-input/custom-input.component';

@Component({
  selector: 'app-first-step',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './first-step.component.html',
  styleUrl: './first-step.component.scss'
})
export class FirstStepComponent {

  personalForm = this.getPersonalForm();

   private getPersonalForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl(''),
      emailConfirmed: new FormControl('')
    });
  }
}
