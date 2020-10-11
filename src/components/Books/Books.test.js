import React from 'react';
import {render} from '@testing-library/jest-dom';
import Books from './Books';
import '@testing-library/jest-dom/extend-expect'

beforeAll(() => {
    global.fetch = jest.fn();
    //window.fetch = jest.fn(); if running browser environment
  });