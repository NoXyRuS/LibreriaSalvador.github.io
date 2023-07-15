import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxStripeModule } from 'ngx-stripe';

import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleArticuloComponent } from './articulo/detalle-articulo/detalle-articulo.component';
import { ListaArticuloComponent } from './articulo/lista-articulo/lista-articulo.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { PaymentComponent } from './payment/payment.component';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Router, RouterModule } from '@angular/router';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalleArticuloComponent,
    ListaArticuloComponent,
    MenuComponent,
    ModalComponent,
    PaymentComponent,
    ShoppingCartComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    DetalleArticuloComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModalModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxStripeModule.forRoot('clave publica'),
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
