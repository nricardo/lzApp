'use strict';

// -- import external libs
import {Component, SetModule} from 'angular2-now';

// -- export module definition
export default SetModule('menu', []).name;

// -- define module
@Component({ selector: 'lz-menu', bind: { items: '=' }, template: require('./menu.html'), controllerAs: 'vm' })

export class lzMenu {

  theme (name) {
    let theme = undefined;

    switch (name) {
      case 'slate':
        require('theme/slate.scss');
        theme = require.resolve('theme/slate.scss');
        break;

      case 'superhero':
        require('theme/superhero.scss');
        theme = require.resolve('theme/superhero.scss');
        break;
    }

    delete require.cache[theme];
    console.log(theme, require.cache);
  }
}
