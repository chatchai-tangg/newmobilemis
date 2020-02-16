import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stdgradeless2',
  templateUrl: './stdgradeless2.page.html',
  styleUrls: ['./stdgradeless2.page.scss'],
})
export class Stdgradeless2Page implements OnInit {

  amcdyear: any;
  total: any;
  list: any;
  chartstd: any;

  constructor(public http: HttpClient, public router: Router) { }

  // get_stdgradeless2() {   
  //   this.http.get('http://203.158.144.140/APIchart/charts/Stdgradeless2')
  //     .subscribe((res: any) => {
  //       this.list = res.Table;
  //       this.total = res.Table.map(res => res.TOTAL);
  //       this.amcdyear = res.Table.map(res => res.ADMITACADYEAR);  
  //       console.log(this.list);
  //       this.chartstdgrade();

  //     });
  // }

  get_stdgradeless2() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/Stdgradeless2')
      .subscribe((res: any) => {
        this.list = res.Table;
        this.total = res.Table.map(res => res.TOTAL);
        this.amcdyear = res.Table.map(res => res.ADMITACADYEAR);
        console.log(this.list);
        this.chartstdgrade();

      });
  }

  ngOnInit() {
    this.get_stdgradeless2();
  }

  chartstdgrade() {
    var ctx = (<any>document.getElementById('stdgradeless2')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.amcdyear,
        datasets: [{
          label: 'นักศึกษาเกรดต่ำกว่า2',
          data: this.total,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {

        },
        legend: {
          position: 'bottom',
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          }
        }
      }
    });

  }
}
