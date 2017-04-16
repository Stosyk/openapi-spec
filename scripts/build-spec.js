#!/usr/bin/env node
'use strict';

var path = require('path');

require('shelljs/global');
set('-e');

var root_path = process.argv[2]
var deploy_path = process.argv[3]
var spec_deploy_path = path.join(deploy_path, 'web_deploy')

console.log('spec deploy path: ' + spec_deploy_path);

mkdir('-p', spec_deploy_path)

var build_dir = path.join(deploy_path, 'spec')
var folders = ['public', 'manage', 'admin']
folders.forEach(function(element, index, array) {
    console.log('start: ' + element);
    var deploy_folder = path.join(spec_deploy_path, element)
    mkdir('-p', deploy_folder)
    mkdir('-p', build_dir)
           
    cp('-R', path.join(root_path, 'resources', element, '*'), build_dir);
    exec('npm run swagger bundle --        -o ' + path.join(deploy_folder, 'swagger.json'));
    exec('npm run swagger bundle -- --yaml -o ' + path.join(deploy_folder, 'swagger.yaml'));
    
    rm('-rf', build_dir)
    console.log('end: ' + element);
});
