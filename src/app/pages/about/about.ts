import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})

export class AboutPage {
  location = 'Villemomble';
  today = '2020-06-11';

  selectOptions = {
    header: 'Select a Location'
  };

  constructor(public popoverCtrl: PopoverController,
              public inAppBrowser: InAppBrowser
  ) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }
}
