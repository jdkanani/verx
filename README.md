# Verx

Lightweight vuex inspired centralized state management library for all kinds of javascript applications.

![Travis](https://travis-ci.org/jdkanani/verx.svg?branch=master)

## install

```bash
npm install --save verx # yarn add verx
```

## Example

```js
import Verx from 'verx';

const countStore = {
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
};

const store = new Verx({
  modules: {
    countStore
  }
});
```

Now, you can can access the state object as ` store.getState('countStore')``, and trigger a state change with the `store.commit` method:

```js
store.commit('countStore/increment');

console.log(store.getState('countStore').count); // -> 1
```