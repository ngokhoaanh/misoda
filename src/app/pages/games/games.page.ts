import {Component} from '@angular/core';
import {GamesData} from '../../providers/games-data';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage {

  games: any[] = [];

  constructor(private gamesData: GamesData) { }

  ionViewDidEnter() {
    this.gamesData.getGames().subscribe((games: any[]) => {
      this.games = games;
    });
  }

}
