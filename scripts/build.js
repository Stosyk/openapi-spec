#!/usr/bin/env node
'use strict';

require('shelljs/global');
set('-e');

mkdir('-p', 'web_deploy')

cp('-R', 'web/*', 'web_deploy/');

exec('node ./scripts/build-spec.js web_deploy');
