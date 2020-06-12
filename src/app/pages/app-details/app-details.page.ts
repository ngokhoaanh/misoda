import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppsData} from '../../providers/apps-data';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.page.html',
  styleUrls: ['./app-details.page.scss'],
})
export class AppDetailsPage {
  application: any;

  constructor(private route: ActivatedRoute,
              private appsData: AppsData,
              public inAppBrowser: InAppBrowser
) { }

  ionViewWillEnter() {
    this.appsData.getApplications().subscribe((data: any) => {
      const appId = this.route.snapshot.paramMap.get('appId');
      for (const a of data) {
        if (a && a.id === appId) {
          this.application = a;
          break;
        }
    }
    });
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }
}
