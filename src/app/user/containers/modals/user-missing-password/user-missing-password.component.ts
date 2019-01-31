import { UserService } from './../../../services/user.service';
import { ToastService } from './../../../../shared/services/toast/toast.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-missing-password',
  templateUrl: './user-missing-password.component.html',
  styleUrls: ['./user-missing-password.component.scss']
})
export class UserMissingPasswordComponent implements OnInit {
  missingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private toastService: ToastService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.missingForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  getErrorMessage(input: string) {
    return this.missingForm.hasError('required', [input])
      ? 'Ce champs est obligatoire'
      : this.missingForm.hasError('email', [input])
      ? 'Veuillez rentrer un email valide'
      : '';
  }

  onSubmit() {
    const email = this.missingForm.get('email').value;

    this.userService
      .missingPassword(email)
      .then(() => {
        this.dialog.closeAll();
        this.toastService.open('Un email vous a été envoyé');
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            this.toastService.open(
              // tslint:disable-next-line:quotemark
              "Aucun compte n'existe pour cette adresse email"
            );
            break;
          case 'auth/account-exists-with-different-credential':
            this.toastService.open(
              'Un compte existe déjà sur une autre authentification'
            );
            break;
          case 'auth/user-disabled':
            this.toastService.open('Ce compte a été désactivé');
            break;
          case 'auth/network-request-failed':
            // tslint:disable-next-line:quotemark
            this.toastService.open("Une erreur réseau s'est produite");
            break;
          default:
            // tslint:disable-next-line:quotemark
            this.toastService.open("Une erreur s'est produite");
            break;
        }
      });
  }
}
