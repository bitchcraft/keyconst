# @bitchcraft/keyconst

Create an object where values are identical to its key names. Inspired by [keymirror](http://yarn.pm/keymirror) and Facebook’s react/lib/keyMirror, keyconst reduces the amount of code to create new key constants in objects.

Instead of
```js
const Actions = keymirror({ BUY_ICECREAM: null })
```
you can now simplify this to
```js
const Actions = keyconst([ 'BUY_ICECREAM' ])
```

## Installation

```sh
$ yarn add @bitchcraft/keyconst
$ npm install -P @bitchcraft/keyconst
```

## Usage

### ES6 example

```js
import keyconst from '@bitchcraft/keyconst';

const Events = keyconst([
    'AUTH_SUCCESS',
    'AUTH_FAILURE',
    'AUTH_LOADING',
]);

function reducer(state = Map(), event) {
    const { payload, type } = event;

    switch (type){
        case Events.AUTH_LOADING:
            return state.set('loading', true);

        case Events.AUTH_SUCCESS:
            return state.set('loading', false)
                .set('user', payload.user);

        case Events.AUTH_FAILURE:
            return state.set('loading', false)
                .set('error', payload.error)
                .delete('user');
    }
    return state;
}

```

### ES5 example

```js
var keyconst = require('@bitchcraft/keyconst');

var Events = keyconst([
    'AUTH_SUCCESS',
    'AUTH_FAILURE',
    'AUTH_LOADING',
]);

function reducer(state, event) {
    if (typeof state !== 'object') state = {};
    var payload = event.payload;
    var type = event.type;

    switch (type){
        case Events.AUTH_LOADING:
            state.loading = true;
            break;

        case Events.AUTH_SUCCESS:
            state.loading = false;
            state.user = payload.user;
            break;

        case Events.AUTH_FAILURE:
            state.loading = false;
            state.error = payload.error;
            delete state.loading;
            break;
    }
    return state;
}

```

### ES2015+ import with flow types

```js
// babel: env, stage-0, flow
import keyconst from '@bitchcraft/keyconst/src/keyconst';
```

# Bundle size

Gzipped size is around 1KB. You can check out the [bundle analytics](./dist/es5-bundle-analytics.html) for the non-minified bundle.

# Help and feedback

Please file issues in [Github](https://github.com/@bitchcraft/keyconst/issues)

# Contribute

We are open for PRs. Please respect to the linting rules.

# License

Keyconst is free software und the BSD-3-Clause (see [LICENSE.md](./LICENSE.md)).

# Contributors

- [Josh Li](https://github.com/maddrag0n) (Maintainer)
