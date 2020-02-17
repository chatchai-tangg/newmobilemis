import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdistfac',
  templateUrl: './studentdistfac.page.html',
  styleUrls: ['./studentdistfac.page.scss'],
})
export class StudentdistfacPage implements OnInit {
  chartstd: any;
  liststd: any;
  list: any;
  cstd: any;
  facstd: any;
  yearstd: any;

  stddept01: any;
  countdept01: any;
  yeardept01: any;
  stddept02: any;
  countdept02: any;
  yeardept02: any;
  stddept03: any;
  countdept03: any;
  yeardept03: any;
  stddept04: any;
  countdept04: any;
  yeardept04: any;
  stddept05: any;
  countdept05: any;
  yeardept05: any;
  stddept06: any;
  countdept06: any;
  yeardept06: any;
  stddept07: any;
  countdept07: any;
  yeardept07: any;
  stddept08: any;
  countdept08: any;
  yeardept08: any;
  stddept09: any;
  countdept09: any;
  yeardept09: any;

  constructor(public http: HttpClient, public router: Router) { }

  // get_stdfiedfac() {
  //   let labels: any = [];
  //   let data: any;
  //   this.http.get('http://203.158.144.140/APIchart/charts/Stdfiedfac')
  //     .subscribe((res: any) => {
  //       this.list = res.Table;
  //       this.facstd = res.Table.map(res => res.FACULTYNAME)
  //       this.yearstd = res.Table.map(res => res.ADMITACADYEAR)
  //       this.cstd = res.Table.map(res => res.CSTD)
  //       // console.log(this.list);
  //       this.chartstdfiedfac();
  //     });
  // }

  get_stddistdept01() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.stddept01 = res.dept01.map(res => res.facultyname);
        this.countdept01 = res.dept01.map(res => res.total);
        this.yeardept01 = res.dept01.map(res => res.admitacadyear);
        this.chartstddistdept01();
      });
  }

  get_stddistdept02() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.stddept02 = res.dept02.map(res => res.facultyname);
        this.countdept02 = res.dept02.map(res => res.total);
        this.yeardept02 = res.dept02.map(res => res.admitacadyear);
        this.chartstddistdept02();
      });
  }

  get_stddistdept03() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.stddept03 = res.dept03.map(res => res.facultyname);
        this.countdept03 = res.dept03.map(res => res.total);
        this.yeardept03 = res.dept03.map(res => res.admitacadyear);
        this.chartstddistdept03();
      });
  }

  get_stddistdept04() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.stddept04 = res.dept04.map(res => res.facultyname);
        this.countdept04 = res.dept04.map(res => res.total);
        this.yeardept04 = res.dept04.map(res => res.admitacadyear);
        this.chartstddistdept04();
      });
  }

  get_stddistdept05() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.stddept05 = res.dept05.map(res => res.facultyname);
        this.countdept05 = res.dept05.map(res => res.total);
        this.yeardept05 = res.dept05.map(res => res.admitacadyear);
        this.chartstddistdept05();
      });
  }

  get_stddistdept06() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.stddept06 = res.dept06.map(res => res.facultyname);
        this.countdept06 = res.dept06.map(res => res.total);
        this.yeardept06 = res.dept06.map(res => res.admitacadyear);
        this.chartstddistdept06();
      });
  }

  get_stddistdept07() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.stddept07 = res.dept07.map(res => res.facultyname);
        this.countdept07 = res.dept07.map(res => res.total);
        this.yeardept07 = res.dept07.map(res => res.admitacadyear);
        this.chartstddistdept07();
      });
  }

  get_stddistdept08() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.stddept08 = res.dept08.map(res => res.facultyname);
        this.countdept08 = res.dept08.map(res => res.total);
        this.yeardept08 = res.dept08.map(res => res.admitacadyear);
        this.chartstddistdept08();
      });
  }

  get_stddistdept09() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.stddept09 = res.dept09.map(res => res.facultyname);
        this.countdept09 = res.dept09.map(res => res.total);
        this.yeardept09 = res.dept09.map(res => res.admitacadyear);
        this.chartstddistdept09();
      });
  }

  ngOnInit() {
    this.get_stddistdept01();
    this.get_stddistdept02();
    this.get_stddistdept03();
    this.get_stddistdept04();
    this.get_stddistdept05();
    this.get_stddistdept06();
    this.get_stddistdept07();
    this.get_stddistdept08();
    this.get_stddistdept09();
  }

  chartstddistdept01() {
    var ctx = (<any>document.getElementById('chartstddistdept01')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.yeardept01,
        datasets: [{
          label: "คณะครุศาสตร์อุตสาหกรรม",
          data: this.countdept01,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [
          ]
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

  chartstddistdept02() {
    var ctx = (<any>document.getElementById('chartstddistdept02')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.yeardept02,
        datasets: [{
          label: "คณะเทคโนโลยีคหกรรมศาสตร์",
          data: this.countdept02,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [
          ]
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

  chartstddistdept03() {
    var ctx = (<any>document.getElementById('chartstddistdept03')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.yeardept03,
        datasets: [{
          label: "คณะเทคโนโลยีสื่อสารมวลชน",
          data: this.countdept03,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [
          ]
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

  chartstddistdept04() {
    var ctx = (<any>document.getElementById('chartstddistdept04')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.yeardept04,
        datasets: [{
          label: "คณะบริหารธุรกิจ",
          data: this.countdept04,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [
          ]
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

  chartstddistdept05() {
    var ctx = (<any>document.getElementById('chartstddistdept05')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.yeardept05,
        datasets: [{
          label: "คณะวิทยาศาสตร์และเทคโนโลยี",
          data: this.countdept05,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [
          ]
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

  chartstddistdept06() {
    var ctx = (<any>document.getElementById('chartstddistdept06')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.yeardept06,
        datasets: [{
          label: "คณะวิศวกรรมศาสตร์",
          data: this.countdept06,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [
          ]
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

  chartstddistdept07() {
    var ctx = (<any>document.getElementById('chartstddistdept07')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.yeardept07,
        datasets: [{
          label: "คณะศิลปศาสตร์",
          data: this.countdept07,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [
          ]
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

  chartstddistdept08() {
    var ctx = (<any>document.getElementById('chartstddistdept08')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.yeardept08,
        datasets: [{
          label: "คณะวิศวกรรมศาสตร์",
          data: this.countdept08,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [
          ]
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

  chartstddistdept09() {
    var ctx = (<any>document.getElementById('chartstddistdept09')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.yeardept09,
        datasets: [{
          label: "คณะวิศวกรรมศาสตร์",
          data: this.countdept09,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [
          ]
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
