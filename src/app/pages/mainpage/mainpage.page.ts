import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'chartjs-plugin-labels';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
})
export class MainpagePage implements OnInit {

  constructor(private http: HttpClient, public router: Router) { }

  list: any;
  stafftype: any;
  stafftotals: any;
  dataArr: any;
  chart: any;


  get_staffsupportacadamic() {

    this.http.get('https://app.rmutp.ac.th/api/bi/hrm/startworksupportandacadamic')
      .subscribe((res: any) => {
        this.list = res;
        this.stafftotals = res.map(ss => ss.people);
        this.stafftype = res.map(ss => ss.pos_linename);
        this.ChartMethod();
      });
  }
  get_staffleave() {

    this.http.get('http://app.rmutp.ac.th/testapibi/charts/Employee_leave')
      .subscribe((res: any) => {
        this.list = res;
        this.stafftotals = res.map(ss => ss.sums);
        this.stafftype = res.map(ss => ss.posline_name);
        this.Chartstaffleave();
      });
  }



  ngOnInit() {
    this.get_staffsupportacadamic();
    this.get_staffleave();
  }

  ChartMethod() {

    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    this.chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',
      // The data for our dataset 
      data: {
        labels: this.stafftype,
        datasets: [{
          label: "dataset",
          data: this.stafftotals,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            color: 'black',
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                sum += data;
              });
              let percentage = (value * 100 / sum).toFixed(1) + "%";
              return percentage;
            },
          },
        },
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 11,
            usePointStyle: true,
            padding: 20
          }
        },
      },
    });
  }

  Chartstaffleave() {

    var ctx = (<any>document.getElementById('staffleavechart')).getContext('2d');
    this.chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',
      // The data for our dataset 
      data: {
        labels: this.stafftype,
        datasets: [{
          label: "dataset",
          data: this.stafftotals,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            color: 'black',
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                sum += data;
              });
              let percentage = (value * 100 / sum).toFixed(1) + "%";
              return percentage;
            },
          },
        },
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 11,
            usePointStyle: true,
            padding: 20
          }
        },
      },
    });
  }






}
