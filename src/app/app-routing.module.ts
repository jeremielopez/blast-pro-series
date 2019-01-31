import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './user/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: '**',
    redirectTo: '/landing/not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
