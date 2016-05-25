'use strict';

export class lzThemer {
  constructor () {
    this.theme = undefined;
  }

  apply (theme) {
    // start using this theme
    theme.use();

    // unload previous theme (if already present)
    if (this.theme) this.theme.unuse();

    // re-assign current theme
    this.theme = theme;
  }

  $get() {
    return {
      load: (name) => {
        let theme = undefined;

        // we need to list all possible entries here, or else webpack
        // complains about require(...) has being an expression
        switch (name) {
          case 'slate':
            require.ensure([], () => {
              theme = require('theme/slate.scss');
              this.apply(theme);
            });
            break;

          case 'superhero':
            require.ensure([], () => {
              theme = require('theme/superhero.scss');
              this.apply(theme);
            });
            break;

          default:
            theme = require('theme/default.scss');
            this.apply(theme);
        }

        return this;
      }
    }
  }
}

// -- export module definition
export default angular.module('lzThemer', [])
.provider('$lzThemer', lzThemer)
.name;
