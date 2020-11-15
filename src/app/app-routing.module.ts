import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {BlogsComponent} from '../app/blogs/blogs.component';
import {AboutusComponent} from '../app/aboutus/aboutus.component';
const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: 'blogs',             component: BlogsComponent },
  { path: 'aboutus',             component: AboutusComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
