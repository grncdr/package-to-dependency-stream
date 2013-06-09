# package-to-dependency-stream

## Synopsis

```javascript
var packageToDependencyStream = require('create-dependency-stream')
var pkg = require('./package.json')
packageToDependencyStream(pkg).on('data', console.log)
/*
{ name: 'from',
  versionRange: '~0.1.3',
  parent: [Object] }
*/
```

## Description

Creates a stream of dependency objects from a parsed package.json file.

## License

MIT
