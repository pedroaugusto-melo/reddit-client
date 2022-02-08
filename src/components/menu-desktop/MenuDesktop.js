import './MenuDesktop.css';
import iconReddit from '../../img/img-reddit-big.png';
import imgSearch from '../../img/img-search.png';
import SearchBar from '../../features/search-bar/SearchBar';
import Subreddits from '../../features/subreddits/Subreddits';
import { setCurrentSubreddit } from '../../features/posts/postsSlice';
import { setSearchTerm } from '../../features/search-bar/searchBarSlice';
import { useDispatch } from 'react-redux';

export default function MenuDesktop() {
    const dispatch = useDispatch();

    const handleClickBrand = () => {
        dispatch(setCurrentSubreddit('r/Home'));
        dispatch(setSearchTerm(''));
    };

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
            <Subreddits />
        </header>
    
    );
}