import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CoreService } from '../core.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
  providers: [CoreService],
})
export class CreatorComponent implements OnInit {
  str: number = 10;
  dex: number = 10;
  con: number = 10;
  int: number = 10;
  wis: number = 10;
  cha: number = 10;

  str_score: Array<number>=[0, 0, 0, 0];
  dex_score: Array<number>=[0, 0, 0, 0];
  con_score: Array<number>=[0, 0, 0, 0];
  int_score: Array<number>=[0, 0, 0, 0];
  wis_score: Array<number>=[0, 0, 0, 0];
  cha_score: Array<number>=[0, 0, 0, 0];

  races: FirebaseListObservable<any[]>;
  classes: FirebaseListObservable<any[]>;
  race: any;
  srace: any;
  clas: string;
  hero_classes: Array<any> = [{name:''}];
  JSON: any;

  constructor(public core: CoreService, public af: AngularFireDatabase) {
    this.races = af.list('/races', {
      query: {  limitToLast: 50  }
    });
    this.classes = af.list('/classes', {
      query: {  limitToLast: 50  }
    });
    this.JSON = JSON;
  }

  ngOnInit() {
  }

  rollDice(n: number): Array<number> {
    let dices: Array<number> = [];
    for (let i = 0; i < n; i++) {
      let r: number = Math.floor(Math.random() * (6)) + 1;
      dices.push(r);
    }
    return dices;
  }

  score(list: Array<number>): number {
    let sum = 0;
    for(let n of list){
      sum += n;
    }
    let min = Math.min.apply(null, list);
    return sum - min;
  }

  roll(): void {
    this.str_score = this.rollDice(4);
    this.str = this.score(this.str_score);
    this.dex_score = this.rollDice(4);
    this.dex = this.score(this.dex_score);
    this.con_score = this.rollDice(4);
    this.con = this.score(this.con_score);
    this.int_score = this.rollDice(4);
    this.int = this.score(this.int_score);
    this.wis_score = this.rollDice(4);
    this.wis = this.score(this.wis_score);
    this.cha_score = this.rollDice(4);
    this.cha = this.score(this.cha_score);
  }

}
