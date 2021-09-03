import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { SearchResultBlockComponent } from './youtube/components/search-result-block/search-result-block.component';
import { ErrorInfoComponent } from './shared/components/error-info/error-info.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'registration', component: RegistrationComponent,
  },
  {
    path: 'videos', component: SearchResultBlockComponent,
  },
  {
    path: '**', component: ErrorInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
