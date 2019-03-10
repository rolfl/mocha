'use strict';

describe('To be run with no timeout', function() {
  it('should run', function(done) {
    // note that the unref is critical for test case
    global.setTimeout(done, 50).unref();
  });
});
