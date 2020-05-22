/*jshint esversion: 8 */
const { execSync } = require('child_process');
console.log("Debug Output " + process.version + process.pid + process.arch + process.cwd);
// stderr is sent to stdout of parent process
// you can set options.stdio if you want it to go elsewhere
const stdout = execSync('npx checksums');
const { spawnSync } = require('child_process');
const child = spawnSync('npx checksums');
const sstdout = stdout.toString('utf8')
/*console.error('error', child.error);*/
console.log(sstdout);
/*console.error('stderr ', child.stderr);*/
