const { execSync } = require('child_process');
// stderr is sent to stdout of parent process
// you can set options.stdio if you want it to go elsewhere
const stdout = execSync('./checksums.js');
const { spawnSync } = require('child_process');
const child = spawnSync('./checksums.js');
const sstdout = stdout.toString('utf8')
/*console.error('error', child.error);*/
console.log(sstdout);
/*console.error('stderr ', child.stderr);*/