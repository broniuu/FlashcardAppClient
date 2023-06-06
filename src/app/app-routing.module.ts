import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FlashcardDetailComponent} from "./components/flashcard-detail/flashcard-detail.component";
import {AddFlashcardComponent} from "./components/add-flashcard/add-flashcard.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuard} from "./services/auth.guard";
import {FlashcardsComponent} from "./components/flashcards/flashcards.component";
import {UpdateFlashcardComponent} from "./components/update-flashcard/update-flashcard.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'flashcards',
    component: FlashcardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'flashcard/:id',
    component: FlashcardDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-flashcard',
    component: AddFlashcardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-flashcard/:id',
    component: UpdateFlashcardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
