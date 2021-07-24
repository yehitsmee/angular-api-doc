import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SwaggerUI from 'swagger-ui';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements AfterViewInit, OnInit {
  type: string;
  spec: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('hi');
    this.type = this.route.snapshot.data.breadcrumb;
    console.log(this.type);
    this.spec = this.apiService.getApi(this.type);
  }

  // this.route.data.subscribe(data => {
  //   this.type = data.breadcrumb;
  // switch (data.breadcrumb) {
  //   case 'Pet': {
  //     this.type = data.breadcrumb;
  //     break;
  //   }
  //   case 'Store': {
  //     this.type = data.breadcrumb;
  //     break;
  //   }
  //   case 'User': {
  //     this.type = data.breadcrumb;
  //     break;
  //   }
  // }
  // });
  // console.log(this.type);
  // this.route.queryParams.subscribe(params => {
  //   this.type = params.type;
  //   console.log(typeof this.type);
  // });

  // }
  ngAfterViewInit() {
    const ui = SwaggerUI({
      domNode: document.getElementById('swagger-ui'),
      spec: this.spec
      //  `    url: 'https://petstore.swagger.io/v2/swagger.json'
    });
  }
}
