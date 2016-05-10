'use strict';

// -- import external libs
import {Component, Inject, State, SetModule} from 'angular2-now';

// -- import lazy router
import lzRouter from 'lzRouter';

// -- import components
import menu from 'components/menu/menu';

// -- export module definition
export default SetModule('lz-app', [menu, lzRouter]).name;

// -- define module
@Inject('$lzRouter')
@State({ name: '/', url: '/', defaultRoute: true })
@Component({ selector: 'lz-app', template: require('./lz.html'), controllerAs: 'vm' })

export class lzApp
{
  modules:Array;

  constructor($lzRouter) {
    console.info('lzApp starting...');
    this.$lzRouter = $lzRouter;

    // init modules
    this.modules = [];

    // register all modules
    this.register('home', '/home', 'Home');
    this.register('about', '/about', 'About');
  }

  register(name, path, label) {
    this.modules.push({ name: name, label: label || name.toUpperCase() });
    this.$lzRouter.register(name, path);
  }
}
