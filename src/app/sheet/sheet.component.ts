import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  hero: any = {
    name: 'Alastor Mody',
    ability_scores: {
      str: 12,
      dex: 12,
      con: 12,
      int: 20,
      wis: 12,
      cha: 12
    },
    classes: [
      {name: 'wizard', level: 3, path: 'conjurator'}
    ],
    race: 'human',
    subrace: 'normal',
    alignement:{
      a: 'lawful',
      b: 'neutral'
    },
    saving_throws:[
      'int', 'dex'
    ],
    skills: [
      { name: 'acrobatics', ability: 'dex', profency: false },
      { name: 'animal handling', ability: 'wis', profency: false },
      { name: 'arcana', ability: 'int', profency: true },
      { name: 'athletics', ability: 'str', profency: false },
      { name: 'deception', ability: 'cha', profency: false },
      { name: 'history', ability: 'int', profency: true },
      { name: 'insight', ability: 'wis', profency: false },
      { name: 'intimidation', ability: 'cha', profency: false },
      { name: 'investigation', ability: 'int', profency: false },
      { name: 'medicine', ability: 'wis', profency: false },
      { name: 'nature', ability: 'int', profency: false },
      { name: 'perception', ability: 'wis', profency: false },
      { name: 'performance', ability: 'cha', profency: false },
      { name: 'persuasion', ability: 'cha', profency: false },
      { name: 'religion', ability: 'int', profency: false },
      { name: 'sleight of hand', ability: 'dex', profency: false },
      { name: 'stealth', ability: 'dex', profency: false },
      { name: 'survival', ability: 'wis', profency: false },
    ],
    hit_points: 46,
    damage: 0,
    hit_dice: 6,
    armor_class: 13,
    speed: 30,
    iniciatie_bonnus: 0,
    weapons: [
      { name: 'shortword', profency: true, ability: 'str', hit:'1d6', hit_bonnus: 0, damage_bonnus: 0, damage_type: 'slashing/piercing', aptitude: ''},
      { name: 'longsbow', profency: true, ability: 'dex', hit:'1d8', hit_bonnus: 0, damage_bonnus: 0, damage_type: 'piercing', aptitude: ''},
      { name: 'staf', profency: true, ability: 'str', hit:'1d4', hit_bonnus: 0, damage_bonnus: 0, damage_type: 'contundent', aptitude: ''},
    ],
    armors: [
      { name: 'chainmail', in_use: true, armor_class: 14, max_dex: 2},
      { name: 'normal clothes', in_use: true, armor_class: 10, max_dex: 10},
    ]


  };
  classes: Array<any> = [
    { name: 'barbarian' },
    { name: 'cleric' },
    { name: 'druid' },
    { name: 'figther' },
    { name: 'monk' },
    { name: 'paladin' },
    { name: 'ranger' },
    { name: 'sorcerer' },
    { name: 'warlock' },
    { name: 'wizard' },
  ];
  races: Array<any> = [
    { name: 'human' },
    { name: 'dwarf' },
    { name: 'elf' },
    { name: 'semiorc' },
    { name: 'dragonborn' },
    { name: 'tiefling' },
    { name: 'gnomo' },
    { name: 'halfling' },
  ];
  alignements_a: Array<any> = [
    { name: 'lawful' },
    { name: 'neutral' },
    { name: 'caotic' },
  ];
  alignements_b: Array<any> = [
    { name: 'good' },
    { name: 'neutral' },
    { name: 'evil' },
  ];
  constructor() { }

  ngOnInit() {
  }

  /// modifier number -> number
  abilityModifier(score: number): number {
    return Math.round((score - 10) /2);
  }
  /// level-> number
  totalLevel(): number {
    let lvl: number = 0;
    for(let clas of this.hero.classes){
      lvl += clas.level;
    }
    return lvl;
  }

  /// profency -> number
  profencyBonnus(): number {
    let profency: number = 0;
    let lvl: number = this.totalLevel();
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
