#!/usr/bin/env node

var watchify = require('../');
var fromArgs = require('browserify/bin/args');

var w = watchify(fromArgs(process.argv.slice(2)));
var outfile = w.argv.o || w.argv.outfile;
var verbose = w.argv.v || w.argv.verbose;

if (!outfile) {
    console.error('You MUST specify an outfile with -o.');
    process.exit(1);
}
w.outfile = outfile;
w.verbose = verbose;
w.on('update', w.bundleAndWrite);
w.bundleAndWrite();
