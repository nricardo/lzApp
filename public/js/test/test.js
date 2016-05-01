'use strict';

angular.module('test', ['ui.router'])
.config(($stateProvider) => {
  $stateProvider
  .state({
    url: '/test',
    name: 'test',
    template: `
      <p>Hi! I'm module <strong>test</strong>." :D</p>
    `
  });
})
.run(() => console.log(' -- module: "test"'));
