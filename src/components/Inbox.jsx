import React, { useEffect, useState } from 'react';
import getInbox from '../utils/data';
import InboxList from './InboxList';
import InboxSearchBar from './InboxSearchBar';
import Loading from './Loading';
import PopupContainerStyle from './styles/PopupCointainerStyle';

function Inbox() {
  const [inbox, setInbox] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setInbox(getInbox);
    }, 1000);
  }, []);

  return (
    <PopupContainerStyle>
      <InboxSearchBar />
      {inbox ? <InboxList inbox={inbox} /> : <Loading type="chats" />}
    </PopupContainerStyle>
  );
}

export default Inbox;
