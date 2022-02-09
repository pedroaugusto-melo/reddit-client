import { fetchComments } from './commentsSlice';
import Comments from './Comments';
import { render, screen } from '@testing-library/react';
import store from '../../../../app/store';
import { Provider } from 'react-redux';

const mockResponse = [
    null,
    {
        data: {
            children: [
                {
                    data: {
                        author: 'auth1',
                        created_utc: 1,
                        body: 'com1',
                        id: 1,
                        parent_id: 't3_1'
                    }
                },

                {
                    data: {
                        author: 'auth2',
                        created_utc: 2,
                        body: 'com2',
                        id: 2,
                        parent_id: 't3_1'
                    }
                },

                {
                    data: {
                        author: 'auth3',
                        created_utc: 3,
                        body: 'com3',
                        id: 3,
                        parent_id: 't3_1'
                    }
                    
                }
            ]
        }
    }
];

const mockState = {
    commentsData:  {
        '1': [
            {
                author: 'auth1',
                createdUTC: 1,
                text: 'com1',
                id: 1
            },

            {
                author: 'auth2',
                createdUTC: 2,
                text: 'com2',
                id: 2
            },

            {
                author: 'auth3',
                createdUTC: 3,
                text: 'com3',
                id: 3
            }

        ]
    }
}

global.fetch = jest.fn(() => Promise.resolve({
    jest: () => Promise.resolve(mockResponse)
}));

describe('Comments component', () => {
    describe('when rendered', () => {
        it('fetches comments', () => {
            return fetchComments()[1];
        });

        it('display all coments', () => {
            render(
                <Provider store={store}>
                    <Comments postURL='#' postId={1} />
                </Provider>
            );

            store.dispatch({
                type: 'comments/setPostId',
                payload: '1'
            });

            store.dispatch({
                type: 'comments/setPostId',
                payload: '2'
            });

            store.dispatch({
                type: 'comments/setPostId',
                payload: '3'
            });
            
            store.dispatch({
                type: 'comments/fetchComments/fulfilled',
                payload: mockResponse
            });

            for(let comment of mockState.commentsData['1']) {
                expect(screen.getByText(comment.author)).toBeInTheDocument();
                expect(screen.getByText(comment.text)).toBeInTheDocument();
                expect(screen.getAllByTestId('comment-date')[0]).toBeInTheDocument();
            }
        });
    });
});