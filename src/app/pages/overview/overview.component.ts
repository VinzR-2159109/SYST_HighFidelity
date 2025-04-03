import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})

export class OverviewComponent {
  faq = [
    {
      title: 'Titel 1',
      content: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.'
    },
    {
      title: 'Titel 2',
      content: 'Dit is een voorbeeld van een antwoord.'
    },
    {
      title: 'Titel 3',
      content: 'Hier komt nog een voorbeeldvraag.'
    },
    {
      title: 'Titel 4',
      content: 'En nog eentje voor de volledigheid.'
    }
  ];

}

