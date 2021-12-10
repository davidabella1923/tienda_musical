import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogueComponent } from './Components/catalogue/catalogue.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { CreateAccountComponent } from './Components/createAccount/createAccount.component';
import { AccesoriesComponent } from './Components/accesories/accesories.component';

const routes: Routes = [  
{path: '', component: HomeComponent},
{path: 'contact', component: ContactComponent},
{path: 'catalogue', component: CatalogueComponent},
{path: 'create', component: CreateAccountComponent},
{path:'login', component: LoginComponent},
{path:'shopping', component: ShoppingComponent},
{path:'accesories', component: AccesoriesComponent},
{path:'404', component: NotfoundComponent},
{path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
