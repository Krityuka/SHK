import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonToggleModule, MatIconModule, MatButtonModule, MatMenuModule,
         MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestListComponent } from './components/request-list/request-list.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { RequestDetailComponent } from './components/request-detail/request-detail.component';
import { RoutingModule } from './routing/routing.module';
import { StatusFilterComponent } from './components/status-filter/status-filter.component';
import { LoginComponent } from './components/login/login.component';
import { RequestEditComponent } from './components/request-edit/request-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    RequestFormComponent,
    RequestDetailComponent,
    StatusFilterComponent,
    LoginComponent,
    RequestEditComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
