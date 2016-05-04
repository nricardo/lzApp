'use strict';

export default
angular.module('home', [])
.config(($stateProvider) => {
  $stateProvider.state({
    url: '/home',
    name: 'home',
    template: require('./home.html')
  });
})
.name;
