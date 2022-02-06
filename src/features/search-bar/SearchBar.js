import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';
import { selectSearchTerm, setSearchTerm } from './searchBarSlice';

export default function SearchBar() {
    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const handleInputChange = ({ target }) => {
        dispatch(setSearchTerm(target.value));
    };

    return(
        <div className='SearchBar'>
            <input 
                type='text' 
                placeholder='Search Reddit'
                value={searchTerm} 
                onChange={handleInputChange} />
        </div>
    );
}