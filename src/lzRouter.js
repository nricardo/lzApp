'use strict';

// -- import external libs
import lzLoadr from 'lz-loadr';

export class lzRouter {
  constructor($futureStateProvider, $lzLoadrProvider) {
    this.$futureStateProvider = $futureStateProvider;

    //$lzLoadrProvider.config({ debug: true });

    $futureStateProvider.stateFactory('lazy', ($q, $lzLoadr, futureState) => {
      let defer = $q.defer();
      let module = futureState.name;

      // load module and its routing definitions
      $lzLoadr.load(module).then(() => defer.resolve(undefined));

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
export default angular.module('lzRouter', [lzLoadr, 'ui.router', 'ct.ui.router.extras'])
.provider('$lzRouter', lzRouter)
.name;
