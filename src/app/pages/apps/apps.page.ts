import { Component, OnInit } from '@angular/core';
import {AppsData} from '../../providers/apps-data';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {

  applications: any[] = [];

  constructor(private appsData: AppsData) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.appsData.getApplications().subscribe((applications: any[]) => {
      this.applications = applications;
    });
  }
}
