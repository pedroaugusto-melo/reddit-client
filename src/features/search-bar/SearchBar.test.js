import { Provider } from 'react-redux';
import SearchBar from '../search-bar/SearchBar';
import store from '../../app/store';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SearchBar component', () => {
    describe('when rendered', () => {
        it('shows a input field', () => {
            render(
                <Provider store={store} >
                    <SearchBar />
                </Provider>
            );

            expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
        });
    });

    describe('when something is typed', () => {
        it('input value changes', () => {
            render(
                <Provider store={store} >
                    <SearchBar />
                </Provider>
            );

            const inputField = screen.getByPlaceholderText(/search/i);
            const inputValue = 'test input';

            fireEvent.change(inputField, {target: {value: inputValue}});
            
            expect(screen.getByRole('textbox').value).toEqual(inputValue);
        });
    });
});