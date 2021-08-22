import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CardDetailedComponent } from './components/card-detailed/card-detailed.component';
import { ErrorInfoComponent } from './components/error-info/error-info.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderCardSortingComponent } from './components/header-card-sorting/header-card-sorting.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    ButtonComponent,
    CardComponent,
    CardDetailedComponent,
    ErrorInfoComponent,
    HeaderComponent,
    HeaderCardSortingComponent,
    LoginComponent,
    RegistrationComponent,
    CardListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
