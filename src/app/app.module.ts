import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterComponent } from './filter/filter.component';
import { CustomersComponent } from './customers/customers.component';
import { ServicesService } from './services.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import { DetailsComponent } from './details/details.component';
import { BackButtonComponent } from './back-button/back-button.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    FilterComponent,
    CustomersComponent,
    ButtonComponent,
    DetailsComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
