let cp = require('child_process');

var cmd = cp.exec('ps -a', function(err, stdout, stderr){
  if(err) {
    throw err
  };

  if(stderr){
    console.log(`STDERR: ${stderr}`);
  }

  console.log(`STDOUT: ${stdout}`);

});
