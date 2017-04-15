#!/usr/bin/env node
'use strict';

require('shelljs/global');
set('-e');

mkdir('-p', 'web_deploy')

cp('-R', 'web/*', 'web_deploy/');

mkdir('-p', 'spec')
cp('-R', 'resources/public/*', 'spec/');
exec('npm run swagger bundle --        -o web_deploy/api.json');
exec('npm run swagger bundle -- --yaml -o web_deploy/api.yaml');
rm('-rf', 'spec')

mkdir('-p', 'spec')
cp('-R', 'resources/manage/*', 'spec/');
exec('npm run swagger bundle --        -o web_deploy/manage.json');
exec('npm run swagger bundle -- --yaml -o web_deploy/manage.yaml');
rm('-rf', 'spec')

mkdir('-p', 'spec')
cp('-R', 'resources/admin/*', 'spec/');
exec('npm run swagger bundle --        -o web_deploy/admin.json');
exec('npm run swagger bundle -- --yaml -o web_deploy/admin.yaml');
rm('-rf', 'spec')
