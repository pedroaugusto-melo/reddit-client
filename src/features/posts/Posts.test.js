import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/store";
import Posts from "./Posts";
import { fetchPosts } from './postsSlice';

const mockResponse = {
    data: {
        children: [
            {
                data: {
                    subreddit: 'sub1',
                    title: 'title1',
                    numUps: '1',
                    numComments: '1',
                    author: 'auth1',
                    createdUTC: '1',
                    id: '1',
                    url: '#'
                }
            },

            {
                data: {
                    subreddit: 'sub2',
                    title: 'title2',
                    numUps: '2',
                    numComments: '2',
                    author: 'auth2',
                    createdUTC: '2',
                    id: '2',
                    url: '#'
                }
            },

            {
                data: {
                    subreddit: 'sub3',
                    title: 'title3',
                    numUps: '3',
                    numComments: '3',
                    author: 'auth3',
                    createdUTC: '3',
                    id: '3',
                    url: '#'
                }
            }
        ]
    }
};

const mockState = {
    subredditPosts: [
        {
            subreddit: 'sub1',
            title: 'title1',
            numUps: '1',
            numComments: '1',
            author: 'auth1',
            createdUTC: '1',
            id: '1',
            url: '#'
        },

        {
            subreddit: 'sub2',
            title: 'title2',
            numUps: '2',
            numComments: '2',
            author: 'auth2',
            createdUTC: '2',
            id: '2',
            url: '#'

        },

        {
            subreddit: 'sub3',
            title: 'title3',
            numUps: '3',
            numComments: '3',
            author: 'auth3',
            createdUTC: '3',
            id: '3',
            url: '#'
        }
    ]
};

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockResponse)
}));

describe('Posts component', () => {
    describe('when rendered', () => {
        it('fetches posts', () => {
            return fetchPosts()[1];
        });

        it('shows posts fetched', () => {
            render(
                <Provider store={store} >
                    <Posts />
                </Provider>
            );

            store.dispatch({
                type: 'posts/fetchPosts/fulfilled',
                payload: mockResponse
            });
            
            for(let post of mockState.subredditPosts) {
                expect(screen.getByText(post.title)).toBeInTheDocument();
            }
        });
    });
});