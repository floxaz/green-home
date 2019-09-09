import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'solutions', component: SolutionsComponent},
  {path: 'lifestyle', component: LifestyleComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    SolutionsComponent,
    LifestyleComponent,
    PageNotFoundComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
