'use strict';

export class lzThemer {
  theme:String;

  constructor () {
    this.theme = undefined;
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
              theme.use();

              // unload previous theme (if already present)
              if (this.theme) this.theme.unuse();
              this.theme = theme;
            });
            break;

          case 'superhero':
            require.ensure([], () => {
              theme = require('theme/superhero.scss');
              theme.use();

              // unload previous theme (if already present)
              if (this.theme) this.theme.unuse();
              this.theme = theme;
            });
            break;

          default:
            theme = require('theme/default.scss');
            theme.use();

            // unload previous theme (if already present)
            if (this.theme) this.theme.unuse();
            this.theme = theme;
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
