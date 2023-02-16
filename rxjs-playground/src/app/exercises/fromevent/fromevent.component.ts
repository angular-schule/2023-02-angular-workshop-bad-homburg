import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime } from 'rxjs';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent {

  currentWidth?: number;

  constructor() {
    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent(window, 'resize').pipe(
      // pure 😀
      map(x => (x.target as Window).innerWidth),
      // impure 😱
      // map(x => window.innerWidth),
      // debounceTime(1000),
      startWith(window.innerWidth),
      startWith(999)
    )
    .subscribe(width => this.currentWidth = width)

    /******************************/
  }

}
