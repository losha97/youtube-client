import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { ButtonComponent } from './components/button/button.component';
import { ErrorInfoComponent } from './components/error-info/error-info.component';
import { HeaderComponent } from './components/header/header.component';
import { FilteringCriteriaBlockComponent } from './components/filtering-criteria-block/filtering-criteria-block.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SortCriterionButtonsComponent } from './components/filtering-criteria-block/sort-criterion-buttons/sort-criterion-buttons.component';
import { FilterInputByWordOrSentenceComponent } from './components/filtering-criteria-block/filter-input-by-word-or-sentence/filter-input-by-word-or-sentence.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SearchInputComponent } from './components/header/search-input/search-input.component';
import { SettingButtonComponent } from './components/header/setting-button/setting-button.component';
import { LoginInformationBlockComponent } from './components/header/login-information-block/login-information-block.component';
import { SearchResultBlockComponent } from './components/search-result-block/search-result-block.component';
import { SearchResultItemComponent } from './components/search-result-block/search-result-item/search-result-item.component';
import { VideoThumbnailComponent } from './components/search-result-block/search-result-item/video-thumbnail/video-thumbnail.component';
import { ViewsCountComponent } from './components/search-result-block/search-result-item/views-count/views-count.component';
import { LikesCountComponent } from './components/search-result-block/search-result-item/likes-count/likes-count.component';
import { DislikesCountComponent } from './components/search-result-block/search-result-item/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './components/search-result-block/search-result-item/comments-count/comments-count.component';
import { VideoTitleComponent } from './components/search-result-block/search-result-item/video-title/video-title.component';
import { MoreButtonComponent } from './components/search-result-block/search-result-item/more-button/more-button.component';
import { BorderBottomColorDirective } from './directives/border-bottom-color.directive';
import { FilterByInputPipe } from './pipes/filter-by-input.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    ButtonComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
