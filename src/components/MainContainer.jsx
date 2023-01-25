import React from 'react';
import MainContainerStyle from './styles/MainContainerStyle';
import MainSearchBar from './MainSearchBar';
import Navigation from './Navigation';
import Inbox from './Inbox';

function MainContainer() {
  return (
    <MainContainerStyle>
      <MainSearchBar />
      <Inbox />
      <Navigation />
    </MainContainerStyle>
  );
}

export default MainContainer;
