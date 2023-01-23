import React from 'react';
import MainContainerStyle from './styles/MainContainerStyle';
import MainSearchBar from './MainSearchBar';
import IconButton from './IconButton';

function MainContainer() {
  return (
    <MainContainerStyle>
      <MainSearchBar />
      <IconButton type="task" />
      <IconButton type="inbox" />
      <IconButton type="quicks" primary />
    </MainContainerStyle>
  );
}

export default MainContainer;
