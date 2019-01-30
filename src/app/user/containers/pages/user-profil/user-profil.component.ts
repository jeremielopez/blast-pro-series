import { User } from '../../../models/user.model';
import { Observable } from 'rxjs';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {
  user: Observable<User>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }
}
