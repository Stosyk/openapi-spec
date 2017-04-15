#!/usr/bin/env node
'use strict';

require('shelljs/global');
set('-e');

var spec_deploy_path = process.argv[2]
if (typeof spec_deploy_path == 'undefined' || spec_deploy_path == null) {
    spec_deploy_path = 'web_deploy'
}

console.log('spec deploy path: ' + spec_deploy_path);

mkdir('-p', spec_deploy_path)

['/public',
 '/manage',
 '/admin',
 ].forEach(function(element, index, array) {
    var folder = spec_deploy_path + element + '/'
  
    mkdir('-p', folder)
    mkdir('-p', 'spec')
           
    cp('-R', 'resources' + element + '/*', 'spec/');
    exec('npm run swagger bundle --        -o ' + folder + 'swagger.json');
    exec('npm run swagger bundle -- --yaml -o ' + folder + 'swagger.yaml');
    
    rm('-rf', 'spec')
 });
