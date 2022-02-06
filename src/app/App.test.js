import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  describe('when render', () => {
    it('shows a menu', () => {
      render(<App />);

      expect(screen.getByText(/reddit/i)).toBeInTheDocument();
    });

    it('shows a post', () => {
      render(<App />);

      expect(screen.getByAltText(/comments/i)).toBeInTheDocument();
    });
  })
});
