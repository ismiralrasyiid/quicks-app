import React, { useEffect, useState } from 'react';
import getInbox from '../utils/data';
import InboxDetail from './InboxDetail';
import InboxList from './InboxList';
import InboxSearchBar from './InboxSearchBar';
import Loading from './Loading';
import PopupContainerStyle from './styles/PopupCointainerStyle';

function Inbox() {
  const [inbox, setInbox] = useState(null);
  const [mode, setMode] = useState('list');
  const [currentMessages, setCurrentMessages] = useState(null);

  const onInboxListClick = (messages, newMode) => {
    setCurrentMessages(messages);
    setMode(newMode);
  };

  useEffect(() => {
    setTimeout(() => {
      setInbox(getInbox);
    }, 1000);
  }, []);

  return (
    <PopupContainerStyle>
      {mode === 'list' ? (
        <>
          <InboxSearchBar />
          {inbox ? <InboxList inbox={inbox} onInboxListClick={onInboxListClick} /> : <Loading type="chats" />}
        </>
      ) : null}
      {mode === 'detail' ? (
        <InboxDetail currentMessages={currentMessages} onInboxListClick={onInboxListClick} />
      ) : null}
    </PopupContainerStyle>
  );
}

export default Inbox;
