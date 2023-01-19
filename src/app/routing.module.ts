import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './common/layout/home.layout';
import { EmployyeStatisfactionForm } from './survey/form/survey.form';
import { SurveyViewComponent } from './survey/view/survey.view';



const routes: Routes = [

  {
    path: 'employee',
    component: HomeLayoutComponent,
    children: [
      { path: 'survey-view', component: SurveyViewComponent },
      { path: 'survey-form', component: EmployyeStatisfactionForm },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
