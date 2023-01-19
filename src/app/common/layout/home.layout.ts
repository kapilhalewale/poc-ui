import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'home-layout',
  templateUrl: './home.layout.html'
})
export class HomeLayoutComponent implements OnInit, AfterViewInit {

  noConnectivity : boolean = true;
  navLinks: any[] = navLinks;
  apnName = 'Employee Satisfaction Metrix';

  

  ngOnInit() {
  }

  constructor() {

  }


  ngAfterViewInit() {
  }


}

const navLinks : any[] = [
  {id : 1, name: "Employee Satisfaction Form", href :"/employee/survey-form", icon : "question_answer"},
  {id : 2, name: "Employee Satisfaction report", href :"/employee/survey-view", icon : "bar_chart"},
]