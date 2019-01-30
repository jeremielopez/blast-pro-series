import { Observable } from 'rxjs';
import { UserService } from './user/services/user.service';
import { MatDialog } from '@angular/material';
import { Component } from '@angular/core';
import { User } from './user/models/user.model';
import { UserLoginComponent } from './user/containers/modals/user-login/user-login.component';
import { UserSubscribeComponent } from './user/containers/modals/user-subscribe/user-subscribe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: Observable<User>;

  constructor(private dialog: MatDialog, private userService: UserService) {
    this.user = this.userService.user;
  }

  login() {
    this.dialog.open(UserLoginComponent, {
      width: '400px'
    });
  }

  subscribe() {
    this.dialog.open(UserSubscribeComponent, {
      width: '400px'
    });
  }

  signout() {
    this.userService.signOut();
  }
}
