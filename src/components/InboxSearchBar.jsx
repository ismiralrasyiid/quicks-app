import React from 'react';
import InboxSearchBarStyle from './styles/InboxSearchBarStyle';
import searchIcon from '../assets/searchinbox.svg';

function InboxSearchBar() {
  return (
    <InboxSearchBarStyle>
      <label htmlFor="inboxSearchBar">
        <input type="text" id="inboxSearchBar" placeholder="Search" />
        <img src={searchIcon} alt="search" />
      </label>
    </InboxSearchBarStyle>
  );
}

export default InboxSearchBar;
