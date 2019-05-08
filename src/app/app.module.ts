import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterComponent } from './filter/filter.component';
import { CustomersComponent } from './customers/customers.component';
import { ServicesService } from './services.service';
import { DetailsComponent } from './details/details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    FilterComponent,
    CustomersComponent,
    DetailsComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
