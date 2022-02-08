import { render, screen, fireEvent } from '@testing-library/react';
import Post from './Post';

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

describe('Post component', () => {
    describe('when rendered', () => {
        it('display all data fields', () => {
            render( <Post post={mockState.subredditPosts[0]} /> );

            expect(screen.getByTestId('title')).toBeInTheDocument();
            expect(screen.getByTestId('ups')).toBeInTheDocument();
            expect(screen.getByTestId('author')).toBeInTheDocument();
            expect(screen.getByTestId('num-comments')).toBeInTheDocument();
            expect(screen.getByTestId('btn-comments')).toBeInTheDocument();
            expect(screen.getByTestId('date')).toBeInTheDocument();
        });
    });

    describe('when comment button is clicked', () => {
        it('shows the comments', () => {
            render( <Post post={mockState.subredditPosts[0]} /> );

            const btnComments = screen.getAllByAltText(/comment/i)[0];
            fireEvent.click(btnComments);

            expect(screen.getByTestId('Comments')).toBeInTheDocument();
        });
    });
});