import React from 'react';
import MainContainerStyle from './styles/MainContainerStyle';
import MainSearchBar from './MainSearchBar';
import Navigation from './Navigation';

function MainContainer() {
  return (
    <MainContainerStyle>
      <MainSearchBar />
      <Navigation />
    </MainContainerStyle>
  );
}

export default MainContainer;
