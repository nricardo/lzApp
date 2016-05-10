'use strict';

// -- import external libs
import {Component, SetModule} from 'angular2-now';

// -- export module definition
export default SetModule('menu', []).name;

// -- define module
@Component({ selector: 'lz-menu', bind: { items: '=' }, template: require('./menu.html'), controllerAs: 'vm' })

export class lzMenu {}
