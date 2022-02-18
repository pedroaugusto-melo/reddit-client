import './MenuDesktop.css';
import iconReddit from '../../img/img-reddit-big.png';
import imgSearch from '../../img/img-search.png';
import SearchBar from '../../features/search-bar/SearchBar';
import Subreddits from '../../features/subreddits/Subreddits';
import { setCurrentSubreddit } from '../../features/posts/postsSlice';
import { setSearchTerm } from '../../features/search-bar/searchBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppearance, setAppearance } from '../../app/appSlice';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';

export default function MenuDesktop() {
    const currAppearance = useSelector(selectAppearance);

    const dispatch = useDispatch();

    const handleClickBrand = () => {
        dispatch(setCurrentSubreddit('r/Home'));
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

    return (
        <header className='MenuDesktop'>
            <figure className='Brand' 
                onClick={handleClickBrand}
            >
                    <img alt='Reddit Icon' src={iconReddit} />
                    <figcaption>
                        reddit
                    </figcaption>
            </figure>
            
            <SearchBar />
            <img className='ImgSearch' alt='Search Icon' src={imgSearch} />

            <FormGroup>
                <FormControlLabel 
                    control={<Switch 
                                onClick={handleApparanceChange}/>} 
                    label={currAppearance === 'dark' ? 'Dark Mode' : 'Light Mode'}
                />
            </FormGroup>

            <Subreddits />
        </header>
    
    );
}