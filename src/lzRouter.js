'use strict';

// -- import external libs
import uirouter from 'angular-ui-router';

class lzRouter {
  constructor($stateProvider) {
    this.$stateProvider = $stateProvider;
  }

  loadTemplate($q) {
    let d = $q.defer();

    require([], () => {
      let template = path.join('modules', name).concat(name, '.html');
      let contents = require(module);
      d.resolve(contents);
    });

    return d.promise;
  }

  $get() {
    return {
      register: (name, path) => {
        this.$stateProvider.state({
          url: path,
          name: name,
          templateProvider: this.loadTemplate
        });

        return this;
      }
    }
  }
}

export default angular.module('lzrouter', [uirouter])
.provider('$lzRouter', lzRouter)
.name;
