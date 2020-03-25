import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Root from '.';

let mockStoreInstance = null;
let mockStore = null;
const initialState = {};

beforeAll(() => {
  mockStoreInstance = configureStore();
});

beforeEach(() => {
  mockStore = mockStoreInstance(initialState);
});

describe('Root', () => {
  it('should renders correctly', () => {
    const component = render(<Provider store={mockStore}><Root /></Provider>);

    expect(component).toMatchSnapshot();
  });
});
