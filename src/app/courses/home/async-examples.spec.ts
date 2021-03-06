import { fakeAsync, tick } from "@angular/core/testing";


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

    expect(test).toBeTruthy();
  }))
})