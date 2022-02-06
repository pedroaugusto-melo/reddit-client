import { render, fireEvent, screen } from '@testing-library/react'
import MenuMobile from './MenuMobile';


describe('MenuMobile component', () => {
    describe('when redered', () => {
        it('shows the brand', () => {
            render(<MenuMobile />);

            expect(screen.getByText(/reddit/i)).toBeInTheDocument();
        })
    });

    describe('when search button is clicked', () => {
        it('shows search bar', () => {
          render(<MenuMobile />);
    
          const searchBtn = screen.getByAltText(/search/i);
          fireEvent.click(searchBtn);
    
          expect(screen.getByPlaceholderText('Search Reddit')).toBeInTheDocument();
        });
    
        it('shows close button', () => {
          render(<MenuMobile />);
    
          const searchBtn = screen.getByAltText(/search/i);
          fireEvent.click(searchBtn);
          
          expect(screen.getByAltText(/close/i)).toBeInTheDocument();
        });
      });
    
      describe('when subreddit button is clicked', () => {
        it('shows the reddits list', () => {
          render(<MenuMobile />);
    
          const subBtn = screen.getByAltText(/subreddit/i);
          fireEvent.click(subBtn);
    
          expect(screen.getByText(/home/i)).toBeInTheDocument();
          expect(screen.getByText(/see all/i)).toBeInTheDocument();
        });
    
        it('shows close button', () => {
          render(<MenuMobile />);
    
          const subBtn = screen.getByAltText(/subreddit/i);
          fireEvent.click(subBtn);
          
          expect(screen.getByAltText(/close/i)).toBeInTheDocument();
        });
      });
});