import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  constructor() { }

  /// modifier number -> number
  abilityModifier(score: number): number {
    return Math.floor((score - 10) /2);
  }

  /// level Array<Clas> -> number
  totalLevel(classes: Array<any>): number {
    let lvl: number = 0;
    for(let clas of classes){
      lvl += clas.level;
    }
    return lvl;
  }

  /// profency Array<Clas> -> number
  profencyBonnus(classes: Array<any>): number {
    let profency: number = 0;
    let lvl: number = this.totalLevel(classes);
    if(lvl < 5)
      profency = 2;
    else if(lvl < 9)
      profency = 3;
    else if(lvl < 13)
      profency = 4;
    else if(lvl < 17)
      profency = 5;
    else
      profency = 6;

    return profency;
  }

}
