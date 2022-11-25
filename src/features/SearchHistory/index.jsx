import { useEffect, useState } from 'react';
import SearchHistoryList from './components/SearchHistoryList';
import './SearchHistory.scss';
import { useDispatch } from 'react-redux';
import { toggleLoadingSong } from 'features/PlayerMusic/musicSlice';
import { nextSong } from 'features/PlayMusic/listSongSlice';
import {useDebounce} from'hooks'
import { SearchSongAPI } from 'apiServices/theSong';
function SearchHistory() {
  const [searchResult,setSearchResult]=useState([]);
  const [valueSearch,setValueSearch]=useState("");
  const debounce =useDebounce(valueSearch,500);
  useEffect(()=>{
    if(!debounce.trim()){
      setSearchResult([]);
      return;
    }
    const SearchSong=async()=>{
      const res=await SearchSongAPI(debounce)
      console.log(res)
      setSearchResult(res)
    }
    SearchSong();

  },[debounce])
  const dispatch = useDispatch();
  const handleClickSong = index => {
		dispatch(toggleLoadingSong(true));
		dispatch(nextSong(index));
	};
  return (
    <div className="header__search">
      <input value={valueSearch} onChange={(e)=> setValueSearch(e.target.value)}
        type="text"
        placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
        className="header__search-input"
      />
      <div className="header__search-btn">
        <i className="bi bi-search header__search-icon"></i>
      </div>
      <SearchHistoryList onClick={handleClickSong} searchList={searchResult} />
    </div>
  );
}

export default SearchHistory;
