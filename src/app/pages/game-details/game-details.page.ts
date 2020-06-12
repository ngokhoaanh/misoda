import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {GamesData} from '../../providers/games-data';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage {
  game: any;

  constructor(private route: ActivatedRoute,
              private gameData: GamesData,
              public inAppBrowser: InAppBrowser) { }

  ionViewWillEnter() {
    this.gameData.getGames().subscribe((data: any) => {
      const appId = this.route.snapshot.paramMap.get('gameId');
      for (const a of data) {
        if (a && a.id === appId) {
          this.game = a;
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
