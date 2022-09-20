import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from 'src/app/components/goodreads/book-details/book-details.component';
import { GoodreadsLandingComponent } from '../goodreads-landing/goodreads-landing.component';

const routes: Routes = [
  { 
    path: '',
    component: GoodreadsLandingComponent,
  },
  { path: 'book/:bookId', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodreadsRoutingModule { }
