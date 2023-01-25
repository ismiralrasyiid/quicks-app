import React from 'react';
import InboxSearchBar from './InboxSearchBar';
import Loading from './Loading';
import PopupContainerStyle from './styles/PopupCointainerStyle';

function Inbox() {
  return (
    <PopupContainerStyle>
      <InboxSearchBar />
      <Loading type="chats" />
    </PopupContainerStyle>
  );
}

export default Inbox;
