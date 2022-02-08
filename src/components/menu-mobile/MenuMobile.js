import SearchBar from '../../features/search-bar/SearchBar';
import Subreddits from '../../features/subreddits/Subreddits';
import './MenuMobile.css';
import iconReddit from '../../img/img-reddit.png';
import btnSearch from '../../img/img-search.png';
import btnSub from '../../img/img-menu.png';
import btnClose from '../../img/img-close.png';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits } from '../../features/subreddits/subredditsSlice';
import { selectSubredditsPosts } from '../../features/posts/postsSlice';

export default function MenuMobile() {
    const [ isSearchActive, setIsSearchActive ] = useState(false);
    const [ isSubActive, setIsSubActive ] = useState(false);
    const dispatch = useDispatch();
    const currPosts = useSelector(selectSubredditsPosts);

    useEffect(() => {
        setIsSubActive(false);
    }, [currPosts]);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    const handleSearchClick = () => {
        setIsSearchActive(prevIsSearchActive => !prevIsSearchActive);
        setIsSubActive(false);
    };
    
    const handleSubClick = () => {
        setIsSubActive(prevIsSubActive => !prevIsSubActive);
        setIsSearchActive(false);
    };

    return(
        <header className='MenuMobile'>
            <figure className='Brand'>
                <img alt='' src={iconReddit} />
                <figcaption>
                    reddit
                </figcaption>
            </figure>

            <nav className='NavMobile'>
                <button 
                    className='NavLink'
                    id='search' 
                    onClick={handleSearchClick} >
                        {isSearchActive ? 
                            <img 
                                alt='Close Search'
                                src={btnClose} />
                            :
                            <img 
                                alt='Search Reddit'
                                src={btnSearch} />
                        }
                </button>

                <button 
                    className='NavLink'
                    id='sub'
                    onClick={handleSubClick} >
                        {isSubActive ? 
                            <img 
                                alt='Close Subreddits'
                                src={btnClose} />
                            :
                            <img 
                                alt='Subreddits'
                                src={btnSub} />
                        }
                </button>
            </nav>

            {isSearchActive && <SearchBar />}
            {isSubActive && <Subreddits />}
        </header>
    );
}