// mocha-example-test.js
var assert = require('assert');

describe('my feature', function () {
  it('works', function () {
    assert.equal('A', 'B');
  });

  it('fails gracefully', function () {
    assert.throws(function () {
      throw 'Error!';
    });
  });

  describe('my other feature', function(){
    it('async', function(done){
      setTimeout(function(){
        done();
      }, 25);
    })
  })

});

// para ejecutar este test:
// ./node_modules/.bin/mocha mocha-example-text.js

// para ejecutar los test que contengan la palabra "fails"
// ./node_modules/.bin/mocha -g "fails" mocha-example-text.js

// por defecto Mocha usa el spec reporter, pero podemos usar otros reporters
// ./node_modules/.bin/mocha -R dot mocha-example-text.js
// ./node_modules/.bin/mocha -R xunit mocha-example-text.js
// ./node_modules/.bin/mocha -R nyan mocha-example-text.js
