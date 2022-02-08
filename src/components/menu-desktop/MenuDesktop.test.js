import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import MenuDesktop from "./MenuDesktop";
import store from '../../app/store';

describe('MenuDesktop component', () => {
    describe('when rendered', () => {
        it('shows the reddit brand', () => {
            render(
                <Provider store={store}>
                    <MenuDesktop />
                </Provider>     
            );

            expect(screen.getByAltText(/reddit icon/i)).toBeInTheDocument();
        });

        it('show the search bar', () => {
            render(
                <Provider store={store}>
                    <MenuDesktop />
                </Provider>     
            );

            expect(screen.getByTestId('SearchBar')).toBeInTheDocument();
        });
    });
});