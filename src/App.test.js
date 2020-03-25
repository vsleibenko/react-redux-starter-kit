import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';

let mockStoreInstance = null;
let mockStore = null;
const initialState = { user: { user: false } };

beforeAll(() => {
  mockStoreInstance = configureStore();
});

beforeEach(() => {
  mockStore = mockStoreInstance(initialState);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={mockStore}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
