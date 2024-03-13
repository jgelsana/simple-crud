import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BookItemComponent } from './book/components/book-item/book-item.component';
import { FormComponent } from './user/components/form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'prefix'
  },
  {
    path: 'user',
    component: FormComponent
  },
  {
    path: 'blog',
    component: BlogItemComponent
  },
  {
    path: 'book',
    component: BookItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
