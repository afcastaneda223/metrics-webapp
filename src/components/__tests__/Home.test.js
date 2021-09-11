/* eslint-disable no-unused-vars */
import React from 'react';
import { createStore } from 'redux';
import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Listhome from '../Listhome';
import fakeobject from '../__mocks__/fakeobject';

afterEach(cleanup);

const firstState = fakeobject;

const createArray = (x) => x.map((key) => ({
  Ingredient: key.strIngredient1,
  url: `https://www.thecocktaildb.com/images/ingredients/${key.strIngredient1}.png`,
}));

const reducer = (state = firstState, action) => {
  switch (action.type) {
    case 'PICK_INGREDIENT':
      return { ...state, ingredient: action.payload };

    case 'GET_INGREDIENTS':
      return { ...state, array: createArray(action.payload.drinks) };

    case 'RELOAD_TOTAL':
      return state;

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
  const { getByText } = renderWithRedux(<Listhome />);
});

it('Renders "COCKTAILS BY INGREDIENT" text', () => {
  const { getByText } = renderWithRedux(<Listhome />);
  expect(screen.getByText('COCKTAILS BY INGREDIENT')).toBeInTheDocument();
});

it('Renders data from state', () => {
  const { getByText } = renderWithRedux(<Listhome />);
  expect(screen.getByText('Applejack')).toBeInTheDocument();
});

it('Home snapshot test', () => {
  const { myrender } = renderWithRedux(<Listhome />);
  expect(myrender).toMatchSnapshot();
});
