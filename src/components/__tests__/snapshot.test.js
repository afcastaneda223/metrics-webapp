import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  BrowserRouter as Router,
} from 'react-router-dom';
import Details from '../Details';
import Home from '../Home';
import Cocktail from '../Cocktail';
import Listhome from '../Listhome';
import Listdetails from '../Listdetails';
import Navbar from '../Navbar';
import store from '../../redux/configureStore';

describe('Render Navbar', () => {
  it('Renders the navbar', () => {
    const header = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>,
    ).toJSON();
    expect(header).toMatchSnapshot();
  });
});

describe('Render Home page', () => {
  it('Renders the Home page', () => {
    const home = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});

describe('Render Listhome page', () => {
  it('Renders the Listhome page', () => {
    const listhome = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Listhome />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(listhome).toMatchSnapshot();
  });
});

describe('Render Details page', () => {
  it('Renders the Details page', () => {
    const details = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(details).toMatchSnapshot();
  });
});

describe('Render Listdetails page', () => {
  it('Renders the Listdetails page', () => {
    const listdetails = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Listdetails />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(listdetails).toMatchSnapshot();
  });
});

describe('Render Cocktail page', () => {
  it('Renders the Cocktail page', () => {
    const cocktail = TestRenderer.create(
      <Provider store={store}>
        <Cocktail />
      </Provider>,
    ).toJSON();
    expect(cocktail).toMatchSnapshot();
  });
});
