import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { JavascriptPracticeComponent } from './javascript-practice/javascript-practice.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { MaterialComponent } from './material/material.component';
import { UserComponent } from './user/user.component';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [
  { path: './', redirectTo: '/exam', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'jspractice', component: JavascriptPracticeComponent },
  { path: 'expressjs', component: ExpressjsComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'user', component: UserComponent},
  { path: 'exam', component: ExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
