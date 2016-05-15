'use strict';

// -- import external libs
import {Component, State, SetModule} from 'angular2-now';

// -- export module definition
export default SetModule('home', []).name;

// -- define module
@Component({ selector: 'home' })
@State({
  url: '/home',
  name: 'home',
  controllerAs: 'vm',
  controller: HomeController,
  template: require('./home.html')
})

export class HomeController {
  constructor () {
    this.module = 'home';
    this.hello = 'Hello, world!';
  }
}
