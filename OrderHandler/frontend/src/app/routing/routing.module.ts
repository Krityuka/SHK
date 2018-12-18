import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth.guard';

import { RequestListComponent } from "../components/request-list/request-list.component";
import { RequestFormComponent } from '../components/request-form/request-form.component';
import { RequestDetailComponent } from '../components/request-detail/request-detail.component';
import {RequestEditComponent } from '../components/request-edit/request-edit.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/requests',
    pathMatch: 'full'
  },
  {
    path: 'requests',
    component: RequestListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'requests/new',
    component: RequestFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'requests/:id',
    component: RequestDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'requests/:id/edit',
    component: RequestEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
