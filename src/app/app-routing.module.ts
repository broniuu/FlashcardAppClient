import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {FlashcardDetailComponent} from "./components/flashcard-detail/flashcard-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'flashcard/:id',
    component: FlashcardDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
