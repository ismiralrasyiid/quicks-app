import React from 'react';
import searchIcon from '../assets/search.svg';
import MainSearchBarStyle from './styles/MainSearchBarStyle';

function MainSearchBar() {
  return (
    <MainSearchBarStyle>
      <label htmlFor="mainSearchBar">
        <img src={searchIcon} alt="search" />
        <input type="text" id="mainSearchBar" />
      </label>
    </MainSearchBarStyle>
  );
}

export default MainSearchBar;
