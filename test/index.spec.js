/* global describe, it, before */

import chai from 'chai';
import Verx from '../lib/verx.js';

chai.expect();

const expect = chai.expect;

let store;

describe('Given an instance of verx', () => {
  before(() => {
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

    store = new Verx({countStore});
  });

  it('should check commit and state', () => {
    store.commit('countStore/increment');
    expect(store.getState('countStore').count).to.equal(1); // -> 1
  });
});
