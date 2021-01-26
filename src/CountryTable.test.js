import { render, screen } from '@testing-library/react';
import CountryTable from './CountryTable';
import { Provider } from "react-redux";
import { store } from "./redux/store";

test('renders CountryTable header Country', () => {
  render(<Provider store={store}>
    <CountryTable />
  </Provider>);
  const headerElement = screen.getByText(/Country/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders CountryTable header Confirmed', () => {
  render(<Provider store={store}>
    <CountryTable />
  </Provider>);
  const headerElement = screen.getByText(/Confirmed/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders CountryTable header Recovered', () => {
  render(<Provider store={store}>
    <CountryTable />
  </Provider>);
  const headerElement = screen.getByText(/Recovered/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders CountryTable header Critical', () => {
  render(<Provider store={store}>
    <CountryTable />
  </Provider>);
  const headerElement = screen.getByText(/Critical/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders CountryTable header Death', () => {
  render(<Provider store={store}>
    <CountryTable />
  </Provider>);
  const headerElement = screen.getByText(/Death/i);
  expect(headerElement).toBeInTheDocument();
});