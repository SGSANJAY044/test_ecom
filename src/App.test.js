import { render, screen } from '@testing-library/react';
import Nav from './pages/Product/components/Nav';
import ProductCard from 'pages/Product/components/ProductCard';

const productData = {
  id: 4,
  title: 'Mens Casual Slim Fit',
  category: 'men\'s clothing',
  description:
    'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
  image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  rating: '2.0',
  price: '15.99'
}

const productReviews = [
  {
    id: 7,
    productid: 4,
    review: 'The color is not as shown in the picture.',
    rating: '2.0',
    customer: 'Eve Franklin'
  }
]

it('Product Nav Bar Check', () => {
  render(<Nav />);
  const document = screen.getByText('SPARROWMART')
  expect(document).toBeInTheDocument();
});

it('Product Card Check', () => {
  render(<ProductCard productData={productData} productReviews={productReviews} />);
  const document = screen.getByText('Mens Casual Slim Fit')
  expect(document).toBeInTheDocument();
});