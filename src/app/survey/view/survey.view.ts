import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeSurveyService } from 'src/app/service/survey.service';

@Component({
    selector: 'survey-view',
    templateUrl: './survey.view.html'
})
export class SurveyViewComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = ['name', 'desc', 'action'];
    dataSource!: MatTableDataSource<any>;
    submittedSurvey: any = [];
    employeeSurveyResponse! :any;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


    constructor(private employeeSurveyService: EmployeeSurveyService, private snackBar: MatSnackBar) {
    }
    ngOnInit() {
        this.loadEmployeeSurveyData();
    }
    
    ngAfterViewInit() {
    }

    loadEmployeeSurveyData() {
        return this.employeeSurveyService.getEmployeeSurvey().subscribe(
        (data) => {
            this.employeeSurveyResponse = data;
            this.dataSource = new MatTableDataSource(this.employeeSurveyResponse.employeeSurveys);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log("employeeSurveyResponse", this.employeeSurveyResponse)
        });
    }
}