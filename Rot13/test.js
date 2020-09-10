const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example", function() {
  it("should test", function() {
    assert.strictEqual(1 + 1, 2);
    assert.deepEqual([2,2], [2,-(-2)]);
  });
});