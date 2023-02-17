import { Component } from '@angular/core';
import { ReplaySubject, throwError, of, EMPTY, retry, catchError } from 'rxjs';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent {

  logStream$ = new ReplaySubject<unknown>();

  constructor(private es: ExerciseService) { }

  /**
   * Das Observable aus `this.es.randomError()` liefert mit hoher Wahrscheinlichkeit einen Fehler.
   * Probiere verschiedene Strategien aus, um den Fehler zu behandeln:
   * - wiederholen ✅
   * - Fehler weiterwerfen ✅
   * - Fehler umwandeln (in ein normales Element) ✅
   * - Fehler verschlucken/ignorieren ✅
   */

  start() {
    this.es.randomError().pipe(

      /******************************/
      // retry(3)
      // catchError(err => { throw new Error('Anderer Fehler!') })
      // catchError(err => throwError(() => 'Anderer Fehler!'))
      // catchError(_ => of('😇'))
      catchError(_ => EMPTY)


      /******************************/

    ).subscribe({
      next: e => this.logStream$.next(e),
      error: err => this.logStream$.next('❌ ERROR: ' + err)
    });
  }
}
