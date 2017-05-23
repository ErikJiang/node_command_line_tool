#! /usr/bin/env node

'use strict'

let ProgressBar = require('progress');
let https = require('https');

let req = https.request({
  host: 'atom-installer.github.com',
  port: 443,
  path: '/v1.9.5/atom-mac.zip'
});

req.on('response', function(res){
  let len = parseInt(res.headers['content-length'], 10);

  console.log();
  let bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: len
  });

  res.on('data', function (chunk) {
    bar.tick(chunk.length);
  });

  res.on('end', function () {
    console.log('\n');
  });
});

req.end();