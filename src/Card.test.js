import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card', () => {
  render(<Card title="Confirmed" count="0" />);
  const cardElement = screen.getByText(/Confirmed/i);
  expect(cardElement).toBeInTheDocument();
});
