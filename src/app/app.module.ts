import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { CatalogueComponent } from './Components/catalogue/catalogue.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    ShoppingComponent,
    CatalogueComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
