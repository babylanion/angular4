import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <h1 highlight>{{title}}</h1>
    <button (click)="onSave($event)">Save</button>
    <button *ngFor="let hero of heroes" (click)="deleteHero(hero)">{{hero.name}}</button>
    <form #heroForm (ngSubmit)="onSubmit(heroForm)"> ... </form>
    <button [disabled]="isUnchanged">Cancel is disabled</button>
    <h1>{{title}}</h1>
    <app-heroes></app-heroes>
`,

})
export class AppComponent {
  title = 'app';
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  // myHero = this.heroes[0];
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];

}
