import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";

import { Observable, of, scheduled } from "rxjs";
import { delay } from "rxjs/operators";


fdescribe('Async Testing Examples', () => {


  it('Async test example with jasmine done()', (done: DoneFn) => {

    let test = false;

    setTimeout(() => {
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  })

  it('Async test example -setTimeout()', fakeAsync(() => {
    let test = false;

    setTimeout(() => {
      console.log('running assertions setTimeout()');
      test = true;

    }, 1000);

    tick(1000);

    // Could also use flush() rather than tick(ms)to complete all async functions

    expect(test).toBeTruthy();
  }));

  it('Async test example, plain Promise', fakeAsync(() => {
    let test = false;

    console.log('Creating Promise');

    Promise.resolve().then(() => {
      console.log('Promise evaluated successfully');

      test = true;
    });

    console.log('Running test assertions');

    flushMicrotasks();

    expect(test).toBeTruthy();
  }));

  it('Async test example - Promises + setTimeout()', fakeAsync(() => {
    let counter = 0;

    Promise.resolve()
      .then(() => {

        counter+=10;

        setTimeout(() => {
          counter += 1;
        }, 1000);
      });

      expect(counter).toBe(0);

      flushMicrotasks();

      expect(counter).toBe(10);

      tick(500);

      expect(counter).toBe(10);

      tick(500);

      expect(counter).toBe(11);
  }));

  it('Async test example - Observables', fakeAsync(() => {
    let test = false;

    console.log('Creating Observables');

    const test$ = of(test).pipe(delay(500));

    test$.subscribe(() => {
      test = true;
    });

    tick(500);

    console.log('Running test Assertion');

    expect(test).toBe(true);
  }))


})