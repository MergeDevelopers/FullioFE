
import { useRef } from 'react';
import Style from './SearchBar.style';
import { useNavigate } from 'react-router-dom';

function SearchBar({ navTo = '/' }) {
  const searchInput = useRef(null);
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();
    
    const searchQuery = searchInput.current.value;
    navigate(`${navTo}?search=${searchQuery}`);
  }
  
  return (
    <Style.SearchBarContainer>
      <Style.SearchBarIcon onClick={handleSearch}/>
      <Style.SearchInput ref={searchInput} placeholder='검색...'/>
    </Style.SearchBarContainer>
  )
}

export default SearchBar;
