const colors = require('colors');
const moment = require('moment');

class CompileTimePlugin {
  constructor() {
    this.startTime = null;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('CompileTimePlugin', () => {
      this.startTime = moment();
    });

    compiler.hooks.emit.tapAsync('CompileTimePlugin', (compilation, callback) => {
      const end = moment().diff(this.startTime);

      console.log(`\n\nCompile done in: ${end/1000}s`.yellow.bold);

      callback();
    });
  }
}

module.exports = CompileTimePlugin;
