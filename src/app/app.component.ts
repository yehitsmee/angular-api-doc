import { Component, VERSION, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav: MatSidenav;

  constructor(private observer: BreakpointObserver) {}
  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe(res => {
      this.sidenav.mode = 'over';
      this.sidenav.close();
    });
  }
}
