import { User } from '../../../models/user.model';
import { Observable } from 'rxjs';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing/routing.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {
  user: Observable<User>;

  constructor(
    private userService: UserService,
    private routingService: RoutingService
  ) {}

  ngOnInit() {
    this.user = this.userService.user;
    this.routingService.setTitle('Mon Profil');
  }
}
