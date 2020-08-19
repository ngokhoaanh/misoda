import {Component} from '@angular/core';
import {PeopleData} from '../../providers/people-data';



@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  people: any[] = [];

  constructor(private peopleData: PeopleData) { }

  ionViewDidEnter() {
    this.peopleData.getPeople().subscribe((people: any[]) => {
      this.people = people;
    });
  }

}
