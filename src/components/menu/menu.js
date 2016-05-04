'use strict';

// -- import external libs
import {Component, Inject, State, SetModule} from 'angular2-now';

// define this module...
SetModule('menu', []);
@Component({ selector: 'lz-menu', bind: { items: '=' }, template: require('./menu.html'), controllerAs: 'vm' })
export class lzMenu
{
  constructor() {}
}

export default 'menu';
