# Temporal API

Temporal 是一个表示日期时间的全新 API，对目前的 Date API 的诸多问题进行修正。

## Temporal.Now

`Temporal.Now`表示当前系统的准确时间。

- Temporal.Now.instant()- 获取当前系统准确时间
- Temporal.Now.timeZoneId()- 获取当前系统时区
- Temporal.Now.zonedDateTimeISO()- 获取系统时区和 ISO-8601 日历中的当前日期和挂钟时间
- Temporal.Now.plainDateISO()- 获取系统时区和 ISO-8601 日历中的当前日期
- Temporal.Now.plainTimeISO()- 获取系统时区和 ISO-8601 日历中的当前挂钟时间
- Temporal.Now.plainDateTimeISO()- 与上面相同，但返回 ISO-8601 日历中的日期时间

```javascript
// 返回 UTC 的当前时间
Temporal.Now.instant().toString()

// 返回某个时区的当前日期时间
Temporal.Now.zonedDateTimeISO('Asia/Shanghai').toString()

// 返回 ISO 格式当前日期时间
Temporal.Now.plainDateTimeISO().toString()

// 返回 ISO 格式的当前时间，不含日期
Temporal.Now.plainTimeISO().toString()
```

下面的例子是获取指定时区的当前时间。

```javascript
const now = Temporal.Now.zonedDateTimeISO('America/New_York');
console.log(now.toString());
```

## Temporal.Instant

`Temporal.Instant`表示某个固定的时间。

```javascript
const instant = Temporal.Instant.from('1969-07-20T20:17Z');
instant.toString(); // => '1969-07-20T20:17:00Z'
instant.epochMilliseconds; // => -14182980000
```

## Temporal.ZonedDateTime

`Temporal.ZonedDateTime`表示某个时区的时间。它会在 ISO8601 的标准格式后面，添加时区后缀和历法后缀。

```javascript
2020-08-05T20:06:13+09:00[Asia/Tokyo][u-ca=japanese]
```

上面示例中，`2020-08-05T20:06:13+09:00`是 ISO8601 标准格式，`[Asia/Tokyo]`是时区后缀，`[u-ca=japanese]`是历法后缀，表示采用日本历法。

默认的历法是 ISO8601 规定的公历，可以省略不写。

下面是使用`Temporal.ZonedDateTime.from()`新建 ZonedDateTime 实例对象的例子。

```javascript
const zonedDateTime = Temporal.ZonedDateTime.from({
  timeZone: 'America/Los_Angeles',
  year: 1995,
  month: 12,
  day: 7,
  hour: 3,
  minute: 24,
  second: 30,
  millisecond: 0,
  microsecond: 3,
  nanosecond: 500
}); // => 1995-12-07T03:24:30.0000035-08:00[America/Los_Angeles]
```

下面是使用`Temporal.ZonedDateTime.compare()`比较两个 ZonedDateTime 实例对象的例子。

```javascript
const one = Temporal.ZonedDateTime.from('2020-11-01T01:45-07:00[America/Los_Angeles]');
const two = Temporal.ZonedDateTime.from('2020-11-01T01:15-08:00[America/Los_Angeles]');

Temporal.ZonedDateTime.compare(one, two);
// -1
```

上面示例中，`Temporal.ZonedDateTime.compare()`返回`-1`，表示第一个时间小于（即早于）第二个时间。如果返回`1`，表示第一个时间大于第二个时间；返回`0`，表示两个时间相等。

ZonedDateTime 实例对象有以下属性。

- hoursInDay：指定时区的某一天一共有多少个小时，主要用来处理夏令时。

```javascript
Temporal.ZonedDateTime.from('2020-01-01T12:00-08:00[America/Los_Angeles]').hoursInDay;
// 24
Temporal.ZonedDateTime.from('2020-03-08T12:00-07:00[America/Los_Angeles]').hoursInDay;
// 23
Temporal.ZonedDateTime.from('2020-11-01T12:00-08:00[America/Los_Angeles]').hoursInDay;
// 25
```

- daysInYear
- inLeapYear

ZonedDateTime 实例对象有以下方法。

- .withTimeZone()：切换时区。

```javascript
zdt = Temporal.ZonedDateTime.from('1995-12-07T03:24:30+09:00[Asia/Tokyo]');
zdt.toString(); // => '1995-12-07T03:24:30+09:00[Asia/Tokyo]'
zdt.withTimeZone('Africa/Accra').toString(); // => '1995-12-06T18:24:30+00:00[Africa/Accra]'
```

- add()：增加时间。

```javascript
zdt = Temporal.ZonedDateTime.from('2020-03-08T00:00-08:00[America/Los_Angeles]');

// 增加一天
laterDay = zdt.add({ days: 1 });
// 2020-03-09T00:00:00-07:00[America/Los_Angeles]
// 注意：时区改变了，表示洛杉矶这个日期处于夏令时，比正常情况早一个小时

laterDay.since(zdt, { largestUnit: 'hour' }).hours;
// 23
// 当天只有23小时

laterHours = zdt.add({ hours: 24 });
// 2020-03-09T01:00:00-07:00[America/Los_Angeles]
laterHours.since(zdt, { largestUnit: 'hour' }).hours; // 24
```

- .until()：计算两个时间之间的差异。

## Temporal.PlainDate

`Temporal.PlainDate`表示与时区无关的日期。

```javascript
const date = Temporal.PlainDate.from({ year: 2006, month: 8, day: 24 }); // => 2006-08-24
date.year; // => 2006
date.inLeapYear; // => false
date.toString(); // => '2006-08-24'
```

下面的例子是计算某个日期以后的时间。

```javascript
const date = Temporal.PlainDate.from('2024-01-01');
const newDate = date.add({ days: 10 });
console.log(newDate.toString()); // Outputs '2024-01-11'
```

## Temporal.PlainTime

`Temporal.PlainTime`表示与时区无关的某个时点。

```javascript
const time = Temporal.PlainTime.from({
  hour: 19,
  minute: 39,
  second: 9,
  millisecond: 68,
  microsecond: 346,
  nanosecond: 205
}); // => 19:39:09.068346205time.second; // => 9
time.toString(); // => '19:39:09.068346205'
```

## Temporal.PlainDateTime

`Temporal.PlainDateTime`表示时区无关的日期时间。

```javascript
const dateTime = Temporal.PlainDateTime.from({
  year: 1995,
  month: 12,
  day: 7,
  hour: 15
}); // => 1995-12-07T15:00:00
const dateTime1 = dateTime.with({
  minute: 17,
  second: 19
}); // => 1995-12-07T15:17:19
```

## Temporal.PlainYearMonth

`Temporal.PlainYearMonth`表示不含日期的年月。

```javascript
const yearMonth = Temporal.PlainYearMonth.from({ year: 2020, month: 10 }); // => 2020-10
yearMonth.daysInMonth; // => 31
yearMonth.daysInYear; // => 366
```

## Temporal.PlainMonthDay

`Temporal.PlainMonthDay`表示没有年份的月和日。

下面是计算生日的例子。

```javascript
const birthday = Temporal.PlainMonthDay.from("12-15");
// 或者写成
// const birthday = Temporal.PlainMonthDay.from({ month: 12, day: 15 })

const birthdayIn2030 = birthday.toPlainDate({ year: 2030 });

birthdayIn2030.toString() // 2030-12-15
birthdayIn2030.dayOfWeek // 7
```

## Temporal.Duration

`Temporal.Duration`表示时长。

```javascript
const duration = Temporal.Duration.from({
  hours: 130,
  minutes: 20
});

duration.total({ unit: 'second' }); // => 469200
```

## Temporal.TimeZone

`Temporal.TimeZone`表示某个时区。

```javascript
const timeZone = Temporal.TimeZone.from('Africa/Cairo');
timeZone.getInstantFor('2000-01-01T00:00'); // => 1999-12-31T22:00:00Z
timeZone.getPlainDateTimeFor('2000-01-01T00:00Z'); // => 2000-01-01T02:00:00
timeZone.getPreviousTransition(Temporal.Now.instant()); // => 2014-09-25T21:00:00Z
timeZone.getNextTransition(Temporal.Now.instant()); // => null
```

## Temporal.Calendar

`Temporal.Calendar`表示某个日历系统。

```javascript
const cal = Temporal.Calendar.from('iso8601');
const date = cal.dateFromFields({ year: 1999, month: 12, day: 31 }, {});
date.monthsInYear; // => 12
date.daysInYear; // => 365
```

## 参考链接

- [Temporal documentation](https://tc39.es/proposal-temporal/docs/)
- [JS Dates Are About to Be Fixed](https://docs.timetime.in/blog/js-dates-finally-fixed/)

