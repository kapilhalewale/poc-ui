import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class EmployeeSurveyService {
    baseurl = 'http://localhost:8080';
    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    submitEmployeeSurveyService(employeeSurveyData : any): Observable<any> {
        return this.http.post(this.baseurl + '/employee/survey', employeeSurveyData);
    }

    getEmployeeSurvey(): Observable<any> {
        return this.http.get(this.baseurl + '/employee/survey')
            .pipe(retry(1));
    }

    checkEmployeeSurveyExists(emailAddress : string): Observable<any> {
        return this.http.get(this.baseurl + '/employee/survey-exist?emailAddress=' + emailAddress)
            .pipe(retry(1));
    }
}