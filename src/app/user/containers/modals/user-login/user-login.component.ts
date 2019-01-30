import { UserMissingPasswordComponent } from './../user-missing-password/user-missing-password.component';
import { ToastService } from './../../../../shared/services/toast/toast.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public userService: UserService,
    private toastService: ToastService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]
      ]
    });
  }

  getErrorMessage(input: string) {
    return this.signinForm.hasError('required', [input])
      ? 'Ce champs est obligatoire'
      : this.signinForm.hasError('email', [input])
      ? 'Veuillez rentrer un email valide'
      : this.signinForm.hasError('pattern', [input])
      ? 'Veuillez rentrer un mot de passe valide'
      : '';
  }

  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.userService
      .emailLogin(email, password)
      .then(() => {
        this.dialog.closeAll();
        this.toastService.open('Vous êtes à présent connecté');
        this.router.navigate(['/user']);
      })
      .catch(error => {
        console.log(error);
        switch (error.code) {
          case 'auth/invalid-email':
            this.toastService.open(
              // tslint:disable-next-line:quotemark
              "Aucun compte n'existe pour cette adresse email"
            );
            break;
          case 'auth/wrong-password':
            this.toastService.open('Le mot de passe est incorrect');
            break;
          case 'auth/account-exists-with-different-credential':
            this.toastService.open(
              'Un compte existe déjà sur une autre authentification'
            );
            break;
          case 'auth/user-disabled':
            this.toastService.open('Ce compte a été désactivé');
            break;
          case 'auth/user-not-found':
            this.toastService.open(
              // tslint:disable-next-line:quotemark
              "Aucun compte n'xiste pour cette adresse email"
            );
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

  googleLogin() {
    this.userService
      .googleLogin()
      .then(() => {
        this.dialog.closeAll();
        this.toastService.open('Vous êtes à présent connecté');
        this.router.navigate(['/user']);
      })
      .catch(error => {
        console.log(error);
        switch (error.code) {
          case 'auth/invalid-email':
            this.toastService.open(
              // tslint:disable-next-line:quotemark
              "Aucun compte n'existe pour cette adresse email"
            );
            break;
          case 'auth/wrong-password':
            this.toastService.open('Le mot de passe est incorrect');
            break;
          case 'auth/account-exists-with-different-credential':
            this.toastService.open(
              'Un compte existe déjà sur une autre authentification'
            );
            break;
          case 'auth/user-disabled':
            this.toastService.open('Ce compte a été désactivé');
            break;
          case 'auth/user-not-found':
            this.toastService.open(
              // tslint:disable-next-line:quotemark
              "Aucun compte n'xiste pour cette adresse email"
            );
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

  onMissingPassword() {
    this.dialog.open(UserMissingPasswordComponent, {
      width: '350px'
    });
  }
}
