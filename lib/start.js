function runCmd(cmd, args, fn) {
  args = args || [];
  var runner = require('child_process').spawn(cmd, args, {
    // keep color
    stdio: "inherit"
  });
  runner.on('close', function (code) {
    if (fn) {
      fn(code);
    }
  });
}

var which = require('which');
var npms = ['tnpm', 'cnpm', 'npm'];

function findNpm() {
  for (var i = 0; i < npms.length; i++) {
    try {
      which.sync(npms[i]);
      return npms[i];
    } catch (e) {

    }
  }
  throw new Error('♣ Please install npm'.cyan);
}

var npm = findNpm();

runCmd(which.sync(npm), ['start'], function(){

});
