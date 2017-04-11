#!/usr/bin/env node
'use strict';
var Path = require('path');

require('shelljs/global');
set('-e');

mkdir('-p', 'spec')
cp('-R', 'resources/public/*', 'spec/');
exec('npm run swagger validate');
rm('-rf', 'spec')

mkdir('-p', 'spec')
cp('-R', 'resources/manage/*', 'spec/');
exec('npm run swagger validate');
rm('-rf', 'spec')

mkdir('-p', 'spec')
cp('-R', 'resources/admin/*', 'spec/');
exec('npm run swagger validate');
rm('-rf', 'spec')
