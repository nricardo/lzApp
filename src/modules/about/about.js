'use strict';

// -- import external libs
import {Component, State, SetModule} from 'angular2-now';

// -- import module's stylesheet
import styles from './about.scss';

// -- export module definition
export default SetModule('about', []).name;

// -- module definition
@Component({ selector: 'about' })
@State({
  url: '/about',
  name: 'about',
  controllerAs: 'vm',
  controller: AboutController,
  template: require('./about.html')
})

export class AboutController {
  constructor () {
    styles.use();
    this.power = 'Power',
    this.responsibility = 'Responsibility';
  }
}
