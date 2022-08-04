import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('renders Layout', () => {
  const expectedContents = 'Hello';
  render(<Layout>{expectedContents}</Layout>);
  expect(screen.queryByText(layoutContents)).toBeNull();
});
