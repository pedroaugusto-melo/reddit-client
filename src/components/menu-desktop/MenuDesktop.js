import './MenuDesktop.css';
import iconReddit from '../../img/img-reddit-big.png';
import imgSearch from '../../img/img-search.png';
import SearchBar from '../../features/search-bar/SearchBar';

export default function MenuDesktop() {
    return (
        <header className='MenuDesktop'>
            <figure className='Brand'>
                <img alt='Reddit Icon' src={iconReddit} />
                <figcaption>
                    reddit
                </figcaption>
            </figure>
            
            <SearchBar />
            <img className='ImgSearch' alt='Search Icon' src={imgSearch} />
        </header>
    );
}