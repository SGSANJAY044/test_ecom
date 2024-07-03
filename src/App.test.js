import { render, screen } from '@testing-library/react';
import Nav from './pages/Product/components/Nav';


it('Product Nav Bar Check', () => {
  render(<Nav />);
  const document = screen.getByText('SPARROWMART')
  expect(document).toBeInTheDocument();
});

it('Cart', () => {
  render(<Nav />);
  const document = screen.getByText('SPARROWMART')
  expect(document).toBeInTheDocument();
});
