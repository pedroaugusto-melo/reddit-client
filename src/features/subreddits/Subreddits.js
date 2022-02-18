import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Subreddits.css';
import imgSub from '../../img/img-sub-reddit.png';
import { selectSubredditsData, selectSubredditsLoadingState, selectSubrreditsErrorState } from './subredditsSlice';
import { setCurrentSubreddit } from '../posts/postsSlice';
import { setSearchTerm } from '../search-bar/searchBarSlice';
import { selectAppearance, setAppearance } from '../../app/appSlice';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

export default function Subreddits() {
    const currAppearance = useSelector(selectAppearance);
    
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

    const handleApparanceChange = () => {
        const appDiv = document.querySelector('.App');

        if(currAppearance === 'dark') {
            dispatch(setAppearance('light'));
            appDiv.setAttribute('id', 'light');
        } else {
            dispatch(setAppearance('dark'));
            appDiv.setAttribute('id', 'dark');
        }
    }

    return(
        <div className='Subreddits' data-testid="Subreddits">
            <FormGroup>
                <FormControlLabel 
                    control={<Switch 
                                onClick={handleApparanceChange}/>} 
                    label={currAppearance === 'dark' ? 'Dark Mode' : 'Light Mode'}
                />
            </FormGroup>

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