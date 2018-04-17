export default class Store {
  constructor(name, module, verx) {
    this.name = name;
    this.module = module;
    this.verx = verx;
    this._context = {
      commit: this.commit.bind(this),
      dispatch: this.dispatch.bind(this),
      getters: this.getters.bind(this)
    };
  }

  getState() {
    return this.module.state;
  }

  commit(key, value) {
    this.module.mutations[key](this.module.state, value);
    this.verx.emit(this.name, this.module.state);
  }

  dispatch(key, value) {
    return this.module.actions[key](
      {
        ...this._context,
        state: this.module.state
      },
      value
    );
  }

  getters(key) {
    return this.module.getters[key](this.module.state);
  }
}
