import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ToastService {
  constructor(public snackBar: MatSnackBar) {}

  open(message: string, action?: string) {
    return this.snackBar.open(message, action ? action : null, {
      duration: 5000
    });
  }
}
