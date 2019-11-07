import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { ItemComponent } from './item/item.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule  } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore'  


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    NavBarComponent,
    HomePageComponent,
    ItemMenuComponent,
    ItemComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    OrderComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
    ], 
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
