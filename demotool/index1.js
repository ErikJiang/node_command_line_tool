#! /usr/bin/env node

'use strict'

const _ = require('lodash');
const program = require('commander');

const range = (val) => {
    return val.split('..').map(Number);
}

const list = (val) => {
    return val.split(',');
}

program
    .version('0.0.1')
    .usage('-c [config file] -m [mult num] -r [min..max] -l [addrlist]')
    .option('-c, --config [value]', '配置文件设置', './demo.conf')
    .option('-m, --mult <n>', '倍数设置', parseFloat)
    .option('-r, --range <a>..<b>', '阈值区间设置', range)
    .option('-l, --list <items>', '地址列表设置', list)

program.parse(process.argv);

if(_.isUndefined(program.mult)||_.isUndefined(program.mult)|| _.isUndefined(program.mult)) {
    console.error('Invalid argument.');
    process.exit(1);
}

console.log(' config: %s', program.config);
console.log(' mult: %j', program.mult);
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list: %j', program.list);