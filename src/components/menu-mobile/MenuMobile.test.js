import { render, fireEvent, screen } from '@testing-library/react'
import MenuMobile from './MenuMobile';
import { Provider } from 'react-redux';
import store from '../../app/store';


describe('MenuMobile component', () => {
    describe('when redered', () => {
        it('shows the brand', () => {
            render(
              <Provider store={store} >
                <MenuMobile />
              </Provider>
            );

            expect(screen.getByText(/reddit/i)).toBeInTheDocument();
        })
    });

    describe('when search button is clicked', () => {
        it('shows search bar', () => {
          render(
            <Provider store={store} >
              <MenuMobile />
            </Provider>
          );
    
          const searchBtn = screen.getByAltText(/search/i);
          fireEvent.click(searchBtn);
    
          expect(screen.getByTestId('SearchBar')).toBeInTheDocument();
        });
    
        it('shows close button', () => {
          render(
            <Provider store={store} >
              <MenuMobile />
            </Provider>
          );
    
          const searchBtn = screen.getByAltText(/search/i);
          fireEvent.click(searchBtn);
          
          expect(screen.getByAltText(/close/i)).toBeInTheDocument();
        });
      });
    
      describe('when subreddit button is clicked', () => {
        it('shows the reddits list', () => {
          render(
            <Provider store={store} >
              <MenuMobile />
            </Provider>
          );
    
          const subBtn = screen.getByAltText(/subreddit/i);
          fireEvent.click(subBtn);
    
          expect(screen.getByTestId('Subreddits')).toBeInTheDocument();
        });
    
        it('shows close button', () => {
          render(
            <Provider store={store} >
              <MenuMobile />
            </Provider>
          );
    
          const subBtn = screen.getByAltText(/subreddit/i);
          fireEvent.click(subBtn);
          
          expect(screen.getByAltText(/close/i)).toBeInTheDocument();
        });
      });
});