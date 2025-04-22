import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material (optional — used for other fields or fallback)
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

// Angular Calendar
import { CalendarModule, CalendarView } from 'angular-calendar';
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

