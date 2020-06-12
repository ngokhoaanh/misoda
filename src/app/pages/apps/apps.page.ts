import { Component, OnInit } from '@angular/core';
import {AppsData} from '../../providers/apps-data';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage {

  applications: any[] = [];

  constructor(private appsData: AppsData) { }

  ionViewDidEnter() {
    this.appsData.getApplications().subscribe((applications: any[]) => {
      this.applications = applications;
    });
  }
}
