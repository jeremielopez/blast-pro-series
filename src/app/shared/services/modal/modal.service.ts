import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';

@Injectable()
export class ModalService {

  constructor(private dialog: MatDialog) {
  }

  getDialogId() {
    return this.dialog.openDialogs[this.dialog.openDialogs.length - 1].id;
  }

  open(component, config): void {
    this.dialog.open(component, config);
  }

  closeAll() {
    this.dialog.closeAll();
  }

  closeSingle() {
    this.dialog.getDialogById(this.getDialogId()).close();
  }

  afterClosed() {
    return this.dialog.getDialogById(this.getDialogId()).afterClosed();
  }

}
