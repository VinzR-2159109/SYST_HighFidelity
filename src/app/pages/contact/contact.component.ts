import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material (optional — used for other fields or fallback)
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

// Angular Calendar
import { CalendarModule, CalendarEvent} from 'angular-calendar';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentDialogComponent } from '../../components/appointment-dialog/appointment-dialog.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    CalendarModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  viewDate: Date = new Date();
  appointments: { date: Date; description: string }[] = [];

  constructor(private dialog: MatDialog) {}
    openDays: { date: Date; hours: string }[] = [
      { date: new Date(2025, 3, 7),  hours: '09:00-12:00' },
      { date: new Date(2025, 3, 14), hours: '13:00-16:00' },
      { date: new Date(2025, 3, 21), hours: '09:00-12:00' },
    ];
  
    events: CalendarEvent[] = this.openDays.map(d => ({
      start: d.date,
      title: `Open: ${d.hours}`,
      allDay: true,
      color: {
        primary:   '#76c7c0',
        secondary: '#e6f7f5'
      }
    }));

  handleDayClick(date: Date): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      data: { date }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.description?.trim()) {
        this.appointments.push({
          date,
          description: result.description.trim()
        });
      }
    });
  }  
}

