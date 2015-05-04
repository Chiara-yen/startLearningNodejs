
```
node bin/program.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
```

`-x 3 => x: 3`

`-y 4 => y: 4`

`-n5 => n: 5`

`-abc => a: true, b: true, c: true`

`--beep=boop => beep: 'boop'`

`foo bar baz => _: [ 'foo', 'bar', 'baz' ]`
