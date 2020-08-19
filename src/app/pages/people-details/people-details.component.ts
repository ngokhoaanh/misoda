import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {PeopleData} from '../../providers/people-data';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent {
  people: any;

  constructor(private route: ActivatedRoute,
              private peopleData: PeopleData,
              public inAppBrowser: InAppBrowser) { }

  ionViewWillEnter() {
    this.peopleData.getPeople().subscribe((data: any) => {
      const appId = this.route.snapshot.paramMap.get('peopleId');
      for (const a of data) {
        if (a && a.id === appId) {
          this.people = a;
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
