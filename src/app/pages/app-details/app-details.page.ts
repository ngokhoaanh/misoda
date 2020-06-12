import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppsData} from '../../providers/apps-data';
import {ActionSheetController} from '@ionic/angular';
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
              public actionSheetCtrl: ActionSheetController,
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

  async openSpeakerShare(application: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + application.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + application.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + application.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(application: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + application.name,
      buttons: [
        {
          text: `Email ( ${application.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + application.email);
          }
        },
        {
          text: `Call ( ${application.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + application.phone);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
}
