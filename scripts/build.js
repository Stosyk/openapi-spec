#!/usr/bin/env node
'use strict';

var path = require('path');
require('shelljs/global');
set('-e');

var deploy_dir = 'web_deploy'

mkdir('-p', deploy_dir)
cp('-R', path.join('web', '*'), deploy_dir);

exec('node '+ path.join('scripts', 'build-spec.js') + ' ./ ./');
