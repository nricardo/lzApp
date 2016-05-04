'use strict';

export default
angular.module('about', [])
.config(($stateProvider) => {
  $stateProvider.state({
    url: '/about',
    name: 'about',
    controllerAs: 'vm',
    controller: AboutController,
    template: require('./about.html'),
  });
})
.controller('aboutController', AboutController)
.name;

class AboutController {
  constructor () {
    this.power = 'Power',
    this.responsibility = 'Responsibility';
  }
}
