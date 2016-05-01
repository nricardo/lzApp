'use strict';

// -- import external libs
import ocLazyLoad from 'oclazyload';
import uiRouter from 'angular-ui-router';
import {Component, Inject, State, SetModule} from 'angular2-now';

// -- import lazy router
//import lzRouter from 'lzRouter';

// define this module...
SetModule('lz-app', [uiRouter, ocLazyLoad]);
@Inject('$ocLazyLoad')
@State({ name: 'root', url: '/' })
@Component({ selector: 'lz-app', template: require('./lz.html'), controllerAs: 'vm' })
export class lzApp
{
  states:Array = [];

  constructor($ocLazyLoad) {
    console.info('lzApp starting...');

    // setup references
    this.$ocLazyLoad = $ocLazyLoad;

    this.states.push({ name: 'home', title: 'Home' });
    //router.register('home', '/home', 'modules/home/home.html');
  }

  load(module) {
    this.$ocLazyLoad.load({
      name: module,
      files: ['js/'.concat(module, '.js')]
    });
  }
}

export default 'lz-app';
