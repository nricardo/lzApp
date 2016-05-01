'use strict';

angular.module('home', [])
.config(($stateProvider) => {
  $stateProvider.state({
    url: '/home',
    name: 'home',
    template: '==== HOME ===='
  });
}).
run(($state, $timeout) => {
  console.log(' -- module "home" loaded...');
  $state.go('home');
});

export default 'home';
