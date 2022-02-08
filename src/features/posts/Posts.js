import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSubreddit, selectIsErrorPosts, selectIsLoadingPosts, selectSubredditsPosts } from './postsSlice';
import { fetchPosts } from './postsSlice';
import Post from './post/Post';
import './Posts.css';
import { selectSearchTerm } from '../search-bar/searchBarSlice';
import PostLoading from './post/posts-loading/PostsLoading';

export default function Posts() {
    const dispatch = useDispatch();

    const [ isShowingAll, setIsShowingAll ] = useState(false);
    
    const currentSubreddit = useSelector(selectCurrentSubreddit);
    const currentSearchTerm = useSelector(selectSearchTerm)
    const subredditPosts = useSelector(selectSubredditsPosts);
    const isLoadingPosts = useSelector(selectIsLoadingPosts);
    const isErrorPosts = useSelector(selectIsErrorPosts);

    useEffect(() => {
        dispatch(fetchPosts({
            currentSubreddit: currentSubreddit,
            currentSearchTerm: currentSearchTerm
        }));
    }, [currentSubreddit, currentSearchTerm, dispatch]);


    const handleShowAll = () => {
        setIsShowingAll(true);
    };

    const handleShowLess = () => {
        setIsShowingAll(false);
    }

    return (
        <div className='Posts' data-testid='Posts'>
            {currentSearchTerm ?
                <h1>Search: {currentSearchTerm}</h1>   
                :
                <h1>Subreddit: {currentSubreddit}</h1>
            }
            

            {isLoadingPosts && 
                <PostLoading />
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