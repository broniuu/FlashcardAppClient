import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, RouterModule, Routes} from "@angular/router";
import { FlashcardDetailComponent } from './components/flashcard-detail/flashcard-detail.component';
import {FlashcardService} from "./services/flashcard.service";
import {FormsModule} from "@angular/forms";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ZoomDirective } from './directives/zoom.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddFlashcardComponent } from './components/add-flashcard/add-flashcard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FlashcardsComponent } from './components/flashcards/flashcards.component';
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./services/auth.interceptor";
import { UpdateFlashcardComponent } from './components/update-flashcard/update-flashcard.component';
import {AutoGrowDirective} from "./directives/auto-grow.directive";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlashcardComponent,
    FlashcardDetailComponent,
    SearchBarComponent,
    FilterPipe,
    ZoomDirective,
    NavbarComponent,
    AddFlashcardComponent,
    LoginComponent,
    RegisterComponent,
    FlashcardsComponent,
    UpdateFlashcardComponent,
    AutoGrowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [
    FlashcardService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
