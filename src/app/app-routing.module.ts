import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { OrderComponent } from './order/order.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { AuthGuard } from '@angular/fire/auth-guard/auth-guard.module';
// import { UserComponent } from './user/user.component';


export const routes: Routes = [
  {path: 'contactus', component: ContactFormComponent},
  {path: '', component: HomePageComponent},
  {path: 'menu', component: ItemMenuComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  // { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  // { path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
