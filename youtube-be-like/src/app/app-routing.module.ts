import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { SearchResultBlockComponent } from './youtube/components/search-result-block/search-result-block.component';
import { ErrorInfoComponent } from './shared/components/error-info/error-info.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { DetailedInformationComponent } from './youtube/components/search-result-block/detailed-information/detailed-information.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'videos', component: SearchResultBlockComponent, canActivate: [AuthGuard],
  },
  {
    path: 'video/:id', component: DetailedInformationComponent, canActivate: [AuthGuard],
  },
  {
    path: 'registration', component: RegistrationComponent,
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
