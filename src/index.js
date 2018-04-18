import EventEmitter from 'events';
import Store from './store';

export default class Verx extends EventEmitter {
  constructor(modules = {}) {
    super();
    this.stores = {};
    Object.keys(modules).forEach(m => {
      const obj = modules[m];
      this.stores[m] = new Store(m, obj, this);
    });
  }

  getState(moduleName) {
    const m = this.stores[moduleName];
    return m.getState.call(m);
  }

  commit(namespace, value) {
    const [moduleName, key] = namespace.split('/');
    const m = this.stores[moduleName];
    m.commit.call(m, key, value);
  }

  dispatch(namespace, value) {
    const [moduleName, key] = namespace.split('/');
    const m = this.stores[moduleName];
    return m.dispatch.call(m, key, value);
  }

  getters(namespace) {
    const [moduleName, key] = namespace.split('/');
    const m = this.stores[moduleName];
    return m.getters.call(m, key);
  }
}
