import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import {HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, RouterModule, Routes} from "@angular/router";
import { FlashcardDetailComponent } from './components/flashcard-detail/flashcard-detail.component';
import {FlashcardService} from "./services/flashcard.service";
import {FormsModule} from "@angular/forms";
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
    FlashcardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [FlashcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
