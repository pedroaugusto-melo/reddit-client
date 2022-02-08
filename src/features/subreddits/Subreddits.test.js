import Subreddits from './Subreddits';
import { Provider } from 'react-redux';
import store from '../../app/store';
import { fireEvent, render, screen } from '@testing-library/react';
import { fetchSubreddits } from './subredditsSlice';

const mockSubredditsResponse = {
    data: {
        children: [
            {
                data: {
                    id: 1,
                    title: 'sub1',
                    icon_img: '#',
                    display_name_prefixed: 'sub1'
                }
            },

            {
                data: {
                    id: 2,
                    title: 'sub2',
                    icon_img: '#',
                    display_name_prefixed: 'sub2'
                }
            },

            {
                data: {
                    id: 3,
                    title: 'sub3',
                    icon_img: '#',
                    display_name_prefixed: 'sub3' 
                }
            }
        ]
    }
};

const mockSubredditsState = [
    {
        id: '1',
        name: 'sub1',
        icon: '#',
        displayName: 'sub1'
    },

    {
        id: '2',
        name: 'sub2',
        icon: '#',
        displayName: 'sub2'
    },

    {
        id: '3',
        name: 'sub3',
        icon: '#',
        displayName: 'sub3'
    }
];

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockSubredditsResponse)
}));


describe('Subreddits component', () => {
    describe('when redered', () => {
        it('fetches subreddit data', () => {
            return fetchSubreddits()[1];
        });

        it('shows subreddit options', () => {
            render(
                <Provider store={store} >
                    <Subreddits />
                </Provider>
            );
            
            store.dispatch({
                type: 'subreddits/fetchSubreddits/fulfilled',
                payload: mockSubredditsResponse
            });

            for(let sub of mockSubredditsState) {
                expect(screen.getByText(sub.name)).toBeInTheDocument();
            }
        });
    });

    describe('when a subreddit is clicked', () => {
        it('changes the current subreddit state', () => {
            render(
                <Provider store={store} >
                    <Subreddits />
                </Provider>
            );

            store.dispatch({
                type: 'subreddits/fetchSubreddits/fulfilled',
                payload: mockSubredditsResponse
            });

            const subreddit = screen.getByText('sub1');
            fireEvent.click(subreddit);

            console.log('State', store.getState());

            expect(store.getState().posts.currentSubreddit).toBe('sub1');
        });
    })
});