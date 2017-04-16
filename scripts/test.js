#!/usr/bin/env node
'use strict';
var path = require('path');
require('shelljs/global');

mkdir('-p', 'spec')
cp('-R', path.join('resources', 'public', '*'), 'spec/');
exec('npm run swagger validate');
rm('-rf', 'spec')

mkdir('-p', 'spec')
cp('-R', path.join('resources', 'manage', '*'), 'spec/');
exec('npm run swagger validate');
rm('-rf', 'spec')

mkdir('-p', 'spec')
cp('-R', path.join('resources', 'admin', '*'), 'spec/');
exec('npm run swagger validate');
rm('-rf', 'spec')
