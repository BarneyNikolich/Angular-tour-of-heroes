import { Component, OnInit  } from '@angular/core';
import { HeroService } from './hero1-service';
import { Hero } from './hero';


@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.splice(1, 5));
    }
}
