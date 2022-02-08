import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Subreddits.css';
import imgSub from '../../img/img-sub-reddit.png';
import { selectSubredditsData, selectSubredditsLoadingState, selectSubrreditsErrorState } from './subredditsSlice';
import { setCurrentSubreddit } from '../posts/postsSlice';
import { setSearchTerm } from '../search-bar/searchBarSlice';

export default function Subreddits() {
    const dispatch = useDispatch();
    const subredditsData = useSelector(selectSubredditsData);
    const isSubredditsLoading = useSelector(selectSubredditsLoadingState);
    const isSubredditsFail = useSelector(selectSubrreditsErrorState);

    const [ isShowingAll, setIsShowingAll ] = useState(false);


    const handleShowAll = () => {
        setIsShowingAll(true);
    }

    const handleShowLess = () => {
        setIsShowingAll(false);
    }

    const handleSelectSubreddit = id => {
        const diplayNameSelected = subredditsData.find(subredditData => subredditData.id === id).displayName;
        dispatch(setCurrentSubreddit(diplayNameSelected));
        dispatch(setSearchTerm(''));
    };

    return(
        <div className='Subreddits' data-testid="Subreddits">
            {!isSubredditsLoading &&
                <h2 className='SubredditsTitle'>Subreddits</h2>
            }
            
            {isSubredditsLoading && <h3>Loading</h3>}

            {isSubredditsFail && <h3>Subreddits loading failed.</h3>}
            
            <ul>
                {subredditsData.map((subredditData,idx) => {
                    if(idx > 2 && !isShowingAll) return null;

                    return (
                        <li 
                            key={subredditData.id}
                            onClick={() => handleSelectSubreddit(subredditData.id)}>
                                <img 
                                    alt={subredditData.name}
                                    src={subredditData.icon || imgSub} />
                                {subredditData.name}
                        </li>
                    );
                })}
            </ul>

            {(!isSubredditsLoading && !isShowingAll) && 
                <h3 onClick={handleShowAll}>Show all</h3>
            }

            {(!isSubredditsLoading && isShowingAll) && 
                <h3 onClick={handleShowLess}>Show less</h3>
            }

        </div>
    );
}