import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-simulation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})

export class SimulationComponent {
  form: FormGroup;

  studyDirections = ['Informatica', 'Biomedische', 'Rechten', 'Economie'];
  nationalities = ['Belg', 'Nederlander', 'Anders'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      surname: [''],
      email: [''],
      studyDirection: [''],
      studiepunten: [''],
      nationality: [''],
      studietoelagekrediet: [''],
      referentieInkomen: ['']
    });
  }

  submitForm() {
    console.log(this.form.value);
  }
}
