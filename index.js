var from = require('from');

module.exports = packageDependencyStream;

function packageDependencyStream(pkg) {
  var dependencies = Object.keys(pkg.dependencies || {}).map(function (name) {
    return {
      name: name,
      versionRange: pkg.dependencies[name],
      parent: pkg
    };
  })
  return from(dependencies);
}
