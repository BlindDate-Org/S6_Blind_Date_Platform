import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import axios from 'axios';

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined') {
      // For node use HTTP adapter
      adapter = require('./adapters/http');   
  }
  return adapter;
}
// const spies = {
//   get: jest.spyOn(axios, 'get'),
//   patch: jest.spyOn(axios, 'patch'),
//   post: jest.spyOn(axios, 'post')
// }
// beforeEach(()=>{
// })
// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
 cleanup();
});