
var assert = require('assert');
var interval = require('..');
var Dates = require('date-math');

describe('date-interval', function () {
  it('should contain floored dates inside interval', function () {
    var start = new Date('2013-10-08T03:45:00Z');
    var end = new Date('2013-10-11T04:25:00Z');

    var got = interval(Dates.day, start, end, { floor: true });
    var expected = [
      new Date('2013-10-08T00:00:00.000Z'),
      new Date('2013-10-09T00:00:00.000Z'),
      new Date('2013-10-10T00:00:00.000Z'),
      new Date('2013-10-11T00:00:00.000Z')
    ];

    assert(interval.length === got.length);

    for (var i = 0; i < got.length; i += 1) {
      var gotDate = got[i];
      var expectedDate = expected[i];
      assert(gotDate.getTime() === expectedDate.getTime());
    }
  });
});