
# date-interval

  Get an array of dates between a `start` date and an `end` date, using a [date-math](https://github.com/segmentio/date-math) `granularity`.

## Quickstart

```javascript
var Dates = require('date-math');
var interval = require('date-interval');

var start = new Date('2013-10-8T03:45:00Z');
var end = new Date('2013-10-11T04:25:00Z');

interval(Dates.day, start, end, { floor: true });
/*
[
  new Date('2013-10-08T00:00:00.000Z'),
  new Date('2013-10-09T00:00:00.000Z'),
  new Date('2013-10-10T00:00:00.000Z'),
  new Date('2013-10-11T00:00:00.000Z')
]
*/
```

## API

### interval(granularity, start, end, options)

  Get an array of dates between a `start` date and an `end` date with a specific [date-math](https://github.com/segmentio/date-math) `granularity`.

## License

MIT
