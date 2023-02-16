import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // 1. Observer
    const observer = {
      next: (e: string) => this.log(e),
      error: (err: any) => this.log('ERROR ' + err),
      complete: () => this.log('COMPLETE')
    }

    // 2. Observable
    // const observable$ = of('😒', '😳', '🥳');

    const observable$ = new Observable<string>(subscriber => {

      subscriber.next('😫');
      subscriber.next('🤩');
      const x = setTimeout(() => subscriber.next('🥸'), 1000);
      const y = setTimeout(() => subscriber.next('🥸'), 1500);
      const z = setTimeout(() => { subscriber.next('🥸'); this.log('Zombie Code! 🧟‍♂️🧟🧟🧟‍♀️🧟‍♀️') }, 2000);

      const ä = setTimeout(() => subscriber.error('mist!'), 1600);
      const ö = setTimeout(() => subscriber.complete(), 3000);

      return () => {
        this.log('Wir sollten schnell aufräumen, sonst holen uns die Zombies!');
        clearTimeout(x);
        clearTimeout(y);
        clearTimeout(z);
        clearTimeout(ö);
        clearTimeout(ä);
      }
    });

    // 3. Subscription
    const subscription = observable$.subscribe(observer);
    const subscription2 = observable$.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 1700);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
