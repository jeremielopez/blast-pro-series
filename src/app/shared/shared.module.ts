import { UpdateComponent } from './modals/update/update.component';
import { ConfirmDialogComponent } from './modals/confirm-dialog/confirm-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
// tslint:disable-next-line:max-line-length
import {
  MatDialogModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatListModule,
  MatTabsModule,
  MatBadgeModule,
  MatExpansionModule,
  MatSelectModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatChipsModule,
  MatStepperModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSlideToggleModule,
  MatDividerModule,
  MatAutocompleteModule,
  MAT_DATE_LOCALE
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService } from './services/toast/toast.service';
import { ModalService } from './services/modal/modal.service';

@NgModule({
  declarations: [ConfirmDialogComponent, UpdateComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatDialogModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatBadgeModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatChipsModule,
    MatNativeDateModule,
    MatStepperModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatAutocompleteModule
  ],
  exports: [
    RouterModule,
    UserModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatSnackBarModule,
    MatDialogModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatBadgeModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatChipsModule,
    MatNativeDateModule,
    MatStepperModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatAutocompleteModule
  ],
  providers: [
    ToastService,
    ModalService,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ],
  entryComponents: [ConfirmDialogComponent, UpdateComponent]
})
export class SharedModule {}
