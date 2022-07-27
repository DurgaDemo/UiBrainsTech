import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardComponent } from './component/card/card.component';
import { BootstrapComponent } from './bootstrap/bootstrap/bootstrap.component';
import { DatabindComponent } from './databind/databind.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { Eventbind1Component } from './eventbind1/eventbind1.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SmsAppComponent } from './sms-app/sms-app.component';
import { ShowPasswordComponent } from './show-password/show-password.component';
import { AmountRangeComponent } from './amount-range/amount-range.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { ProductComponent } from 'src/componentcommunication/product/product.component';
import { SubProductComponent } from 'src/componentcommunication/sub-product/sub-product.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    
    CardComponent,
    BootstrapComponent,
    DatabindComponent,
    EventbindComponent,
    Eventbind1Component,
    ProductItemComponent,
    ShoppingCartComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    RegistrationFormComponent,
    NgIfComponent,
    NgForComponent,
    ProductComponent,
    SubProductComponent,
    PipesComponent,
    EmployeeComponent,
    UserListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
