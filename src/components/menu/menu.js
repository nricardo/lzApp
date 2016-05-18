'use strict';

// -- import external libs
import {Component, SetModule} from 'angular2-now';

// -- export module definition
export default SetModule('menu', []).name;

// -- define module
@Component({ selector: 'lz-menu', bind: { items: '=' }, providers: ['$lzThemer'], template: require('./menu.html'), controllerAs: 'vm' })

export class lzMenu {
  constructor ($lzThemer) {
    this.$lzThemer = $lzThemer;
  }

  theme (name) {
    this.$lzThemer.load(name);
  }
}
