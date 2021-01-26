import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store";

test('renders Covid 19', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const titleElement = screen.getByText(/Covid 19/i);
  expect(titleElement).toBeInTheDocument();
});
