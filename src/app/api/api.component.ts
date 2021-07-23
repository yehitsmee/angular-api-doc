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
    this.route.queryParams.subscribe(params => {
      this.type = params.type;
      console.log(typeof(this.type));
    });
    this.spec = this.apiService.getApi(this.type);
  }
  ngAfterViewInit() {
    const ui = SwaggerUI({
      domNode: document.getElementById('swagger-ui'),
      spec: this.spec
      // url: 'https://petstore.swagger.io/v2/swagger.json'
    });
  }
}
