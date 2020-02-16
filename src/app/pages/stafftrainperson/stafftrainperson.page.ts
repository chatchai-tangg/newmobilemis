import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stafftrainperson',
  templateUrl: './stafftrainperson.page.html',
  styleUrls: ['./stafftrainperson.page.scss'],
})
export class StafftrainpersonPage implements OnInit {
  depth: any;
  total: any;
  list: any;
  chartstaff: any;

  constructor(public http: HttpClient, public router: Router) { }

  // get_stafftrain() {   
  //   this.http.get('http://203.158.144.140/APIchart/charts/Trainperson')
  //     .subscribe((res: any) => {
  //       this.list = res.Table;
  //       this.depth = res.Table.map(res => res.dept_name_th);
  //       this.total = res.Table.map(res => res.TOTAL);  
  //       console.log(this.list);
  //       this.chartstfftrain();
  //     });
  // }

  get_stafftrainbydivi() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/Emptrainstaffbydivi')
      .subscribe((res: any) => {
        this.list = res;
        this.depth = res.map(res => res.facultyname);
        this.total = res.map(res => res.total);        
        this.chartstfftrain();

      });
  }

  get_stafftrainbyfac() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/Emptrainstaffbyfac')
      .subscribe((res: any) => {
        this.list = res;
        this.depth = res.map(res => res.facultyname);
        this.total = res.map(res => res.total);       
        this.chartstfftrainbyfac();

      });
  }

  get_stafftrainbycenter() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/Emptrainstaffbycenter')
      .subscribe((res: any) => {
        this.list = res;
        this.depth = res.map(res => res.facultyname);
        this.total = res.map(res => res.total);        
        this.chartstfftrainbycenter();

      });
  }


  get_stafftrainbyinst() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/Emptrainstaffbyinst')
      .subscribe((res: any) => {
        this.list = res;
        this.depth = res.map(res => res.facultyname);
        this.total = res.map(res => res.total);
        
        this.chartstfftrainbyinst();

      });
  }


  ngOnInit() {
    this.get_stafftrainbydivi();
    this.get_stafftrainbyfac();
    this.get_stafftrainbycenter();
    this.get_stafftrainbyinst();
  }

  chartstfftrain() {
    var ctx = (<any>document.getElementById('stafftrain')).getContext('2d');
    this.chartstaff = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.depth,
        datasets: [{
          label: 'อบรม/ประชุม/สัมมนา',
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
          labels: {
            render: 'value',
          }
        },
        legend: {
          position: 'bottom',
          display: true,
          labels: {
          }
        }
      }
    });
  }

  chartstfftrainbyfac() {
    var ctx = (<any>document.getElementById('stafftrainfac')).getContext('2d');
    this.chartstaff = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.depth,
        datasets: [{
          label: 'อบรม/ประชุม/สัมมนา',
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
          labels: {
            render: 'value',
          }
        },
        legend: {
          position: 'bottom',
          display: true,
          labels: {
          }
        }
      }
    });
  }

  chartstfftrainbycenter() {
    var ctx = (<any>document.getElementById('stafftraincenter')).getContext('2d');
    this.chartstaff = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.depth,
        datasets: [{
          label: 'อบรม/ประชุม/สัมมนา',
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
          labels: {
            render: 'value',
          }
        },
        legend: {
          position: 'bottom',
          display: true,
          labels: {
          }
        }
      }
    });
  }

  chartstfftrainbyinst() {
    var ctx = (<any>document.getElementById('stafftraininst')).getContext('2d');
    this.chartstaff = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.depth,
        datasets: [{
          label: 'อบรม/ประชุม/สัมมนา',
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
          labels: {
            render: 'value',
          }
        },
        legend: {
          position: 'bottom',
          display: true,
          labels: {
          }
        }
      }
    });
  }

}
