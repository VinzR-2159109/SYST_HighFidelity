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
  calculatedMoney: number | null = null;
  extraMessage: string | "" = "";

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
    const values = this.form.value;

    if (Object.values(values).some(value => value === '' || value == null)) {
      this.calculatedMoney = 0;
      this.extraMessage = "Niet alle velden zijn ingevuld."
    }
    else if (values.referentieInkomen > 2250) {
      this.calculatedMoney = 0;
      this.extraMessage = "Je referentie inkomen ligt boven grens."
    }
    else if (values.studietoelagekrediet < 30) {
      this.calculatedMoney = 0;
      this.extraMessage = "Je hebt een te laag studie toelage krediet."
    }
    else {
      this.calculatedMoney = 3000/values.referentieInkomen * (values.name.length + 
        values.surname.length + 
        values.email.length + 
        values.studyDirection.length + 
        values.studiepunten + 
        values.nationality.length + 
        values.studietoelagekrediet);

      this.extraMessage = "";
    }


  setTimeout(() => {
    const element = document.getElementById('calculatedMoney');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 0);
  }
}
