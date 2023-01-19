import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeSurveyService } from 'src/app/service/survey.service';

@Component({
  selector: 'survey-form',
  templateUrl: './survey.form.html'
})
export class EmployyeStatisfactionForm implements OnInit {
  title = 'magnit-poc-ui';
  apnName = 'Employee Satisfaction Metrix';
  chipValue = '';
  teaQuality = '';
  overallSatisfaction = '';

  feedbackFormGroup!: FormGroup;
  employeeSurveyDataExist!: any;

  constructor(private employeeSurveyService: EmployeeSurveyService,
    private snackBar: MatSnackBar) {
    this.initFeedbackForm(this.employeeSurveyDataExist);
  }
  ngOnInit() {
    this.loadEmployeeSurveyData();
  }


  initFeedbackForm(formData : any) {
    this.feedbackFormGroup = new FormGroup({
      fullName: new FormControl(formData ? formData.fullName : '', Validators.required),
      emailAddress: new FormControl(formData ? formData.emailAddress : '', Validators.required),
      resourceAvailability: new FormControl(formData ? formData.resourceAvailability : ''),
      responsibilityClarity: new FormControl(formData ? formData.responsibilityClarity : 0),
      workCulture: new FormControl(formData ? formData.workCulture : ''),
      teaQuality: new FormControl(formData ? formData.teaQuality : ''),
      overallSatisfaction: new FormControl(formData ? formData.overallSatisfaction : ''),
      briefComment: new FormControl(formData ? formData.briefComment : '', Validators.required),
      
    });
  }

  emailAddressChangeEvent(){
    let emailAddress =  this.feedbackFormGroup.controls['emailAddress'].value;

    this.checkEmployeeAlreadySurveySubmitted(emailAddress);
    console.log("emailAddressChangeEvent", emailAddress);
  

  }
  submitEmployeeSurvey() {
    let employeeSurveyData = this.feedbackFormGroup.value;
    console.log("employeeSurveyData", employeeSurveyData);
    return this.employeeSurveyService.submitEmployeeSurveyService(employeeSurveyData).subscribe(
      (response) => {
        this.displayAlert("Dear " + employeeSurveyData.fullName + "!!! your job satisfaction survey submited successfully");
        console.log("Submitted data", response);
      }
    )
  }

  setChipValue(value: any, formName: any) {
    this.feedbackFormGroup.controls[formName].setValue(value);

    if (formName === 'workCulture') {
      this.chipValue = value;
    }
    else if (formName === 'teaQuality') {
      this.teaQuality = value;
    }
    else if (formName === 'overallSatisfaction') {
      this.overallSatisfaction = value;
    }

    
  }

  checkEmployeeAlreadySurveySubmitted(emailAddress : string) {
    return this.employeeSurveyService.checkEmployeeSurveyExists(emailAddress).subscribe(
      (data: {}) => {
        console.log("checkEmployeeSurveyExists .. ", data);
        if(data){
          this.employeeSurveyDataExist = data;
          this.initFeedbackForm(this.employeeSurveyDataExist);
          this.displayAlert("Hey!! you have already submitted this survey");
        }
      });
  }

  loadEmployeeSurveyData() {
    return this.employeeSurveyService.getEmployeeSurvey().subscribe(
      (data: {}) => {
        console.log("loadEmployeeSurveyData .. ", data);
      });
  }

  displayAlert(message: any) {
    this.snackBar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    });
  }

}
