import { AuthGuard } from './guards/auth.guard';
import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  MatAutocompleteModule,
  MatCheckboxModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './containers/modals/user-login/user-login.component';
import { UserSubscribeComponent } from './containers/modals/user-subscribe/user-subscribe.component';
import { UserProfilComponent } from './containers/pages/user-profil/user-profil.component';
import { UserMissingPasswordComponent } from './containers/modals/user-missing-password/user-missing-password.component';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserSubscribeComponent,
    UserProfilComponent,
    UserMissingPasswordComponent
  ],
  providers: [UserService, AuthGuard],
  imports: [
    CommonModule,
    UserRoutingModule,
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
    MatAutocompleteModule,
    MatCheckboxModule
  ],
  entryComponents: [
    UserLoginComponent,
    UserMissingPasswordComponent,
    UserSubscribeComponent
  ]
})
export class UserModule {}
