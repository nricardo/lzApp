'use strict';

// -- import external libs
import {Component, State, SetModule} from 'angular2-now';

// -- import module's stylesheet
import styles from './home.scss';

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
    styles.use();
    this.module = 'home';
    this.hello = 'Hello, world!';
  }
}
