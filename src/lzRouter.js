'use strict';

// -- import external libs
import ocLazyLoad from 'oclazyload';
import {Component, SetModule} from 'angular2-now';

export class lzRouter {
  constructor($futureStateProvider, $ocLazyLoadProvider) {
    this.$futureStateProvider = $futureStateProvider;

    $ocLazyLoadProvider.config({ debug: true });

    $futureStateProvider.stateFactory('lazy', ($q, $ocLazyLoad, futureState) => {
      let defer = $q.defer();
      let module = futureState.name;

      // load module and its routing definitions
      $ocLazyLoad.load({
        name: module,
        files: ['js/'.concat(module, '.js')]
      }).then(() => defer.resolve(undefined));

      return defer.promise;
    });
  }

  $get() {
    return {
      register: (name, path) => {
        this.$futureStateProvider.futureState({
          url: path,
          name: name,
          type: 'lazy'
        });

        return this;
      }
    }
  }
}

// -- export module definition
export default angular.module('lzrouter', [ocLazyLoad, 'ui.router', 'ct.ui.router.extras'])
.provider('$lzRouter', lzRouter)
.name;
