/* eslint-disable no-unused-vars */
import React from 'react';
import { createStore } from 'redux';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Listdetails from '../Listdetails';
import fakeobject2 from '../__mocks__/fakeobject2';

afterEach(cleanup);

const firstState = fakeobject2;

const createDetailArray = (x) => x.map((key) => ({
  name: key.strDrink,
  image: key.strDrinkThumb,
  id: key.idDrink,
}));

const reducer = (state = firstState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return { ...state, array: createDetailArray(action.payload.drinks) };

    case 'GET_DETAILID':
      return { ...state, detailID: action.payload };

    default:
      return state;
  }
};

function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}><BrowserRouter>{component}</BrowserRouter></Provider>),
  };
}

it('Renders with Redux', () => {
  const { getByText } = renderWithRedux(<Listdetails />);
});

it('Renders data from state', () => {
  const { getByText } = renderWithRedux(<Listdetails />);
  expect(screen.getByText('A Night In Old Mandalay')).toBeInTheDocument();
});

it('Home snapshot test', () => {
  const { myrender } = renderWithRedux(<Listdetails />);
  expect(myrender).toMatchSnapshot();
});
