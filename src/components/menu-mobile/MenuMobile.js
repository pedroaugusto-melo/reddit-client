import SearchBar from '../../features/search-bar/SearchBar';
import Subreddits from '../../features/subreddits/Subreddits';
import './MenuMobile.css';
import iconReddit from '../../img/img-reddit.png';
import btnSearch from '../../img/img-search.png';
import btnSub from '../../img/img-menu.png';
import btnClose from '../../img/img-close.png';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSubreddits } from '../../features/subreddits/subredditsSlice';
import { setCurrentSubreddit } from '../../features/posts/postsSlice';
import { setSearchTerm } from '../../features/search-bar/searchBarSlice';

export default function MenuMobile() {
    const [ isSearchActive, setIsSearchActive ] = useState(false);
    const [ isSubActive, setIsSubActive ] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    const handleSearchClick = () => {
        setIsSearchActive(prevIsSearchActive => !prevIsSearchActive);
        setIsSubActive(false);
        formatSearchMargin();
    };
    
    const handleSubClick = () => {
        setIsSubActive(prevIsSubActive => !prevIsSubActive);
        setIsSearchActive(false);
        formatSubredditsMargin();
    };

    const handleClickBrand = () => {
        dispatch(setCurrentSubreddit('r/Home'));
        dispatch(setSearchTerm(''));
    };


    function formatSearchMargin() {
        const postsDiv = document.querySelector('.Posts');

        if(!isSearchActive) {
            postsDiv.style.paddingTop = '100px';
        } else {
            postsDiv.style.paddingTop = '20px';
        }
    }

    function formatSubredditsMargin(){
        const postsDiv = document.querySelector('.Posts');
        let subredditsDivHeight = 0;

        if(isSubActive) {
            subredditsDivHeight = document.querySelector('.Subreddits').getBoundingClientRect().height;
        }

        if(!isSubActive) {
            postsDiv.style.paddingTop = `${subredditsDivHeight + 250}px`;
        } else {
            postsDiv.style.paddingTop = '20px';
        }
        
    }

    return(
        <header className='MenuMobile' data-testid='Menu'>
            <figure 
                className='Brand'
                onClick={handleClickBrand}
            >
                    <img alt='Reddit Icon' src={iconReddit} />
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