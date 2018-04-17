/* global describe, it, before */

import chai from 'chai';
import Verx from '../lib/verx.js';

chai.expect();

const expect = chai.expect;

let store;

describe('Given an instance of verx', () => {
  before(() => {
    store = new Verx();
  });
  describe('when I need the name', () => {});
});
