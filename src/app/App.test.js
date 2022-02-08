import { render, screen } from '@testing-library/react';
import store from './store';
import App from './App';
import { Provider } from 'react-redux';

describe('App Component', () => {
  describe('when render', () => {
    it('shows a menu', () => {
      render(
        <Provider store={store} >
          <App />
        </ Provider>
      );

      expect(screen.getByTestId(/menu/i)).toBeInTheDocument();
    });

    it('shows post component', () => {
      render(
        <Provider store={store} >
          <App />
        </ Provider>
      );

      expect(screen.getByTestId('Posts')).toBeInTheDocument();
    });
  })
});
