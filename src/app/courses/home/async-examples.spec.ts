

fdescribe('Async Testing Examples', () => {


  it('Async test example with jasmine done()', (done: DoneFn) => {

    let test = false;

    setTimeout(() => {
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  })

  it('Async test example -setTimeout()', () => {

    let test = false;

    setTimeout(() => {
      console.log('running assertions');
      test = true;
      expect(test).toBeTruthy();
    }, 1000);
  })
})