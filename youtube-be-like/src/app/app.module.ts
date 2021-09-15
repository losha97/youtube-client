import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { AddCardComponent } from './shared/components/add-card/add-card.component';
import { ErrorInfoComponent } from './shared/components/error-info/error-info.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FilteringCriteriaBlockComponent } from './core/components/filtering-criteria-block/filtering-criteria-block.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { SortCriterionButtonsComponent } from './core/components/filtering-criteria-block/sort-criterion-buttons/sort-criterion-buttons.component';
import { FilterInputByWordOrSentenceComponent } from './core/components/filtering-criteria-block/filter-input-by-word-or-sentence/filter-input-by-word-or-sentence.component';
import { LogoComponent } from './core/components/header/logo/logo.component';
import { SearchInputComponent } from './core/components/header/search-input/search-input.component';
import { SettingButtonComponent } from './core/components/header/setting-button/setting-button.component';
import { LoginInformationBlockComponent } from './core/components/header/login-information-block/login-information-block.component';
import { SearchResultBlockComponent } from './youtube/components/search-result-block/search-result-block.component';
import { SearchResultItemComponent } from './youtube/components/search-result-block/search-result-item/search-result-item.component';
import { VideoThumbnailComponent } from './youtube/components/search-result-block/search-result-item/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './youtube/components/search-result-block/search-result-item/views-count/views-count.component';
import { LikesCountComponent } from './youtube/components/search-result-block/search-result-item/likes-count/likes-count.component';
import { DislikesCountComponent } from './youtube/components/search-result-block/search-result-item/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './youtube/components/search-result-block/search-result-item/comments-count/comments-count.component';
import { VideoTitleComponent } from './youtube/components/search-result-block/search-result-item/video-title/video-title.component';
import { MoreButtonComponent } from './youtube/components/search-result-block/search-result-item/more-button/more-button.component';
import { BorderBottomColorDirective } from './shared/directives/border-bottom-color.directive';
import { FilterByInputPipe } from './shared/pipes/filter-by-input.pipe';
import { DetailedInformationComponent } from './youtube/components/search-result-block/detailed-information/detailed-information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './auth/helpers/jwt.interceptor';
import { ErrorInterceptor } from './auth/helpers/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    ErrorInfoComponent,
    HeaderComponent,
    FilteringCriteriaBlockComponent,
    LoginComponent,
    RegistrationComponent,
    SortCriterionButtonsComponent,
    FilterInputByWordOrSentenceComponent,
    LogoComponent,
    SearchInputComponent,
    SettingButtonComponent,
    LoginInformationBlockComponent,
    SearchResultBlockComponent,
    SearchResultItemComponent,
    VideoThumbnailComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    VideoTitleComponent,
    MoreButtonComponent,
    BorderBottomColorDirective,
    FilterByInputPipe,
    DetailedInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
