import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'cr-ability-score',
  templateUrl: './abilityScores.component.html',
  providers: [CoreService]
})
export class CrAbilityScoreComponent implements OnInit {
  ability_scores: any = {
    'str': 0,
    'dex': 0,
    'con': 0,
    'int': 0,
    'wis': 0,
    'cha': 0
  };
  rols: Array<any>;
  constructor(private _: CoreService) { }

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

  roll(event: Event, type: string): Array<any> {
    this.clear();
    let rols: Array<any> = [];
    let dices = 3;
    if(type === '2')
      dices = 4;
    for (let i = 0; i < 6; i++) {
      rols.push(this.rollDice(dices));
    }
    return rols;
  }

  totalRol(dices: Array<number>): number {
    let sum = 0;
    for(let n of dices){
      sum += n;
    }
    if(dices.length === 4) {
      let min = Math.min.apply(null, dices);
      sum = sum - min;
    }
    return sum;
  }

  isAsigned(ability: string): boolean {
    if(this.ability_scores[ability] !== 0)
      return true;
    return false;
  }

  diceInUse(score: number): boolean {
    //buscamos duplicados
    let dups: number = 0;
    for(let rol of this.rols) {
      let total: number = this.totalRol(rol)
      if(total === score) dups++;
    }
    // buscarmos el numero de incidencias del dado en los scores
    let ins: number = dups;
    if(score === this.ability_scores.str) ins--;
    if(score === this.ability_scores.dex) ins--;
    if(score === this.ability_scores.con) ins--;
    if(score === this.ability_scores.int) ins--;
    if(score === this.ability_scores.wis) ins--;
    if(score === this.ability_scores.cha) ins--;
    let dif: number = dups - ins;
    if(dif === dups) return true;
    return false;
  };

  setAbility(event: any, score: number): void {
    let value: string = event.value;
    this.ability_scores[value] = score;
  }
  clear(): void {
    this.ability_scores.str = 0;
    this.ability_scores.dex = 0;
    this.ability_scores.con = 0;
    this.ability_scores.int = 0;
    this.ability_scores.wis = 0;
    this.ability_scores.cha = 0;
    this.rols = null;
  }
}
