import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.scss']
})
export class AppointmentDialogComponent {
  firstName: string = '';
  lastName: string = '';
  time: string = '';
  extraNote: string = '';

  constructor(
    public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { date: Date }
  ) {}

  save(): void {
    this.dialogRef.close({
      firstName: this.firstName.trim(),
      lastName: this.lastName.trim(),
      time: this.time,
      extraNote: this.extraNote.trim()
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}

