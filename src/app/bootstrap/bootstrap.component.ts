import { routerTransition } from './../shared/animations/router.animation';
import { MatDialog } from '@angular/material';
import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user/models/user.model';
import { SwUpdate } from '@angular/service-worker';
import { UserService } from '../user/services/user.service';
import { RoutingService } from '../routing/routing.service';
import { Router, RouterOutlet } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { UserLoginComponent } from '../user/containers/modals/user-login/user-login.component';
import { UserSubscribeComponent } from '../user/containers/modals/user-subscribe/user-subscribe.component';
import { UpdateComponent } from '../shared/modals/update/update.component';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css'],
  animations: [routerTransition]
})
export class BootstrapComponent implements OnInit {
  user: Observable<User>;
  title: string;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  showInstallButton = false;
  deferredPrompt;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeinstallprompt(ev) {
    ev.preventDefault();
    this.showInstallButton = true;
    this.deferredPrompt = ev;
  }

  installApp() {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        this.showInstallButton = false;
      }
      this.deferredPrompt = null;
    });
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private swUpdate: SwUpdate,
    private userService: UserService,
    private routing: RoutingService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    /**
     * Check the state of the app and suggest to update if there are some changements
     */
    if (this.swUpdate.isEnabled) {
      interval(4000).subscribe(() => this.swUpdate.checkForUpdate());
      this.swUpdate.available.subscribe(evt => {
        this.dialog
          .open(UpdateComponent)
          .afterClosed()
          .subscribe(isReady => {
            if (isReady === true) {
              this.swUpdate
                .activateUpdate()
                .then(() => window.location.reload());
            }
          });
      });
    }
    this.user = this.userService.user;
    this.routing.title.subscribe(title => {
      this.title = title;
    });
  }

  signOut() {
    this.userService.signOut();
    this.router.navigate(['/landing/accueil']);
  }

  openLogin() {
    this.dialog.open(UserLoginComponent, {
      width: '350px'
    });
  }

  openSubscribe() {
    this.dialog.open(UserSubscribeComponent, {
      width: '350px'
    });
  }

  help() {
    this.router.navigate(['/landing/contact']);
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
