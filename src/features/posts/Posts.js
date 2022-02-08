import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSubreddit, selectIsErrorPosts, selectIsLoadingPosts, selectSubredditsPosts } from './postsSlice';
import { fetchPosts } from './postsSlice';
import Post from './post/Post';
import './Posts.css';

export default function Posts() {
    const dispatch = useDispatch();

    const [ isShowingAll, setIsShowingAll ] = useState(false);
    
    const currentSubreddit = useSelector(selectCurrentSubreddit);
    const subredditPosts = useSelector(selectSubredditsPosts);
    const isLoadingPosts = useSelector(selectIsLoadingPosts);
    const isErrorPosts = useSelector(selectIsErrorPosts);

    useEffect(() => {
        dispatch(fetchPosts(currentSubreddit));
    }, [currentSubreddit, dispatch]);

    const handleShowAll = () => {
        setIsShowingAll(true);
    };

    const handleShowLess = () => {
        setIsShowingAll(false);
    }

    return (
        <div className='Posts' data-testid='Posts'>
            <h1>Subreddit: {currentSubreddit}</h1>

            {isLoadingPosts && 
                <h3>Loading...</h3>
            }

            <ul>
            {(!isLoadingPosts && subredditPosts.length !== 0) && 
                subredditPosts.map((subredditPost, idx) => {
                    if(idx > 4 && !isShowingAll) return null;

                    return (
                        <li key={subredditPost.id}> 
                            <Post post={subredditPost}/>
                        </li>
                    );
                })
            }
            </ul>

            {isErrorPosts && <h3>Failed to load posts.</h3>}

            {(!isShowingAll && !isLoadingPosts) && 
                <h3 onClick={handleShowAll}>Show all posts</h3>
            }

            {(isShowingAll && !isLoadingPosts) && 
                <h3 onClick={handleShowLess}>Show less posts</h3>
            }
        </div>
    );
}