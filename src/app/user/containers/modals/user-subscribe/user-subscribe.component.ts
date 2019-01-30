import { ToastService } from './../../../../shared/services/toast/toast.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-subscribe',
  templateUrl: './user-subscribe.component.html',
  styleUrls: ['./user-subscribe.component.scss']
})
export class UserSubscribeComponent implements OnInit {
  signupForm: FormGroup;
  hide = true;

  constructor(
    public userService: UserService,
    private dialog: MatDialog,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  async ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]
      ]
    });
  }

  getErrorMessage(input: string) {
    return this.signupForm.hasError('required', [input])
      ? 'Ce champs est obligatoire'
      : this.signupForm.hasError('email', [input])
      ? 'Veuillez rentrer un email valide'
      : this.signupForm.hasError('pattern', [input])
      ? // tslint:disable-next-line:quotemark
        "Ce champs n'est pas valide"
      : '';
  }

  onSubmit() {
    const displayName = this.signupForm.get('displayName').value;
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;

    this.userService
      .emailSubscribe(
        email,
        password,
        displayName,
      )
      .then(() => {
        this.dialog.closeAll();
        this.router.navigate(['/']);
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.toastService.open(
              'Un compte existe déjà avec cette adresse email'
            );
        }
      });
  }
}
