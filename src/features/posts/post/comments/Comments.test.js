import { fetchComments } from './commentsSlice';
import Comments from './Comments';
import { render, screen } from '@testing-library/react';
import store from '../../../../app/store';

const mockResponse = [
    null,
    {
        data: {
            children: [
                {
                    author: 'auth1',
                    createdUTC: 1,
                    text: 'com1',
                    id: 1,
                    parent_id: 't3_1'
                },

                {
                    author: 'auth2',
                    createdUTC: 2,
                    text: 'com2',
                    id: 2,
                    parent_id: 't3_2'
                },

                {
                    author: 'auth3',
                    createdUTC: 3,
                    text: 'com3',
                    id: 3,
                    parent_id: 't3_3'
                }
            ]
        }
    }
];

const mockState = {
    commentsData:  {
        '1': {
            author: 'auth1',
            createdUTC: 1,
            text: 'com1',
            id: 1
        },

        '2': {
            author: 'auth2',
            createdUTC: 2,
            text: 'com2',
            id: 2
        },

        '3': {
            author: 'auth3',
            createdUTC: 3,
            text: 'com3',
            id: 3
        }
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
            render(<Comments postURL='#' />);
            
            store.dispatch({
                type: 'comments/fetchComments/fulfilled',
                payload: mockResponse
            });

            for(let comment in mockState.commentsData) {
                expect(screen.getByText(comment.author)).toBeInTheDocument();
                expect(screen.getByText(comment.text)).toBeInTheDocument();
                expect(screen.getByTestId('comment-date')).toBeInTheDocument();
            }
        });
    });
});