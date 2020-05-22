#!/usr/bin/env node
/*jshint esversion: 8 */
var crypto = require('crypto');
var fs = require('fs');
const readline = require('readline');
var algo = 'sha256';
var shasum = crypto.createHash(algo);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('▄████▄   ██░ ██ ▓█████  ▄████▄   ██ ▄█▀  ██████  █    ██  ███▄ ▄███▓  ██████  ')
console.log('▒██▀ ▀█  ▓██░ ██▒▓█   ▀ ▒██▀ ▀█   ██▄█▒ ▒██    ▒  ██  ▓██▒▓██▒▀█▀ ██▒▒██    ▒ ')
console.log('▒▓█    ▄ ▒██▀▀██░▒███   ▒▓█    ▄ ▓███▄░ ░ ▓██▄   ▓██  ▒██░▓██    ▓██░░ ▓██▄   ')
console.log('▒▓▓▄ ▄██▒░▓█ ░██ ▒▓█  ▄ ▒▓▓▄ ▄██▒▓██ █▄   ▒   ██▒▓▓█  ░██░▒██    ▒██   ▒   ██▒')
console.log('▒ ▓███▀ ░░▓█▒░██▓░▒████▒▒ ▓███▀ ░▒██▒ █▄▒██████▒▒▒▒█████▓ ▒██▒   ░██▒▒██████▒▒')
console.log('░ ░▒ ▒  ░ ▒ ░░▒░▒░░ ▒░ ░░ ░▒ ▒  ░▒ ▒▒ ▓▒▒ ▒▓▒ ▒ ░░▒▓▒ ▒ ▒ ░ ▒░   ░  ░▒ ▒▓▒ ▒ ░')
console.log('░  ▒    ▒ ░▒░ ░ ░ ░  ░  ░  ▒   ░ ░▒ ▒░░ ░▒  ░ ░░░▒░ ░ ░ ░  ░      ░░ ░▒  ░ ░  ')
console.log('░         ░  ░░ ░   ░   ░        ░ ░░ ░ ░  ░  ░   ░░░ ░ ░ ░      ░   ░  ░  ░  ')
console.log('░ ░       ░  ░  ░   ░  ░░ ░      ░  ░         ░     ░            ░         ░  ')
console.log('░                       ░                                                     ')


rl.question('checksums-cli>? Type The Path To The File You Want To Find The Checksum Of > ', (answer) => {
console.log(`PATH: ${answer}`)
var file = `${answer}`;
var s = fs.ReadStream(file);
s.on('data', function (d) { shasum.update(d); });
s.on('end', function () {
    var d = shasum.digest('hex');
    console.log("SHA256:"+d);})
var sha512sum = crypto.createHash('sha512');
s.on('data', function (d) { sha512sum.update(d); });
s.on('end', function () {
    var d = sha512sum.digest('hex');
    console.log("SHA512:" + d);})
var sha1sum = crypto.createHash('sha1');
s.on('data', function (d) { sha1sum.update(d); });
s.on('end', function () {
    var d = sha1sum.digest('hex');
    console.log("SHA1:" + d);})
var md5sum = crypto.createHash('md5');
s.on('data', function (d) { md5sum.update(d); });
s.on('end', function () {
    var d = md5sum.digest('hex');
    console.log("MD5:"+d);})
var md4sum = crypto.createHash('md4');
s.on('data', function (d) { md4sum.update(d); });
s.on('end', function () {
    var d = md4sum.digest('hex');
    console.log("MD4:" + d);})
    rl.close();
});