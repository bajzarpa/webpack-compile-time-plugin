const colors = require('colors');
const moment = require('moment');

function CompileTimePlugin(){
  this.startTime = null;
}


CompileTimePlugin.prototype.apply = function(compiler) {
  compiler.plugin("compilation", () => {
    this.startTime = moment();
  });

  compiler.plugin("emit", (compilation, callback) => {
    const end = moment().diff(this.startTime);

    console.log(`\n\nCompile done in: ${end/1000}s`.yellow.bold);

    callback();
  });

};

module.exports = CompileTimePlugin;
