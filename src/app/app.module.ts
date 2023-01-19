import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EmployeeSurveyService } from './service/survey.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeLayoutComponent } from './common/layout/home.layout';
import { SurveyViewComponent } from './survey/view/survey.view';
import { EmployyeStatisfactionForm } from './survey/form/survey.form';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    SurveyViewComponent,
    EmployyeStatisfactionForm
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,FormsModule, ReactiveFormsModule,
  ],
  providers: [EmployeeSurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
