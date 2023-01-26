import React from 'react';
import PropTypes from 'prop-types';
import GroupMessage from './GroupMessage';
import PrivateMessage from './PrivateMessage';

function InboxList({ inbox }) {
  return (
    <div>
      {inbox.map((item) => (item.type === 'group'
        ? (
          <GroupMessage
            key={item.id}
            title={item.title}
            createdAt={item.createdAt}
            lastMessage={item.messages[item.messages.length - 1]}
          />
        )
        : (
          <PrivateMessage
            key={item.id}
            title={item.title}
            createdAt={item.createdAt}
            lastMessage={item.messages[item.messages.length - 1]}
          />
        )))}
    </div>
  );
}

InboxList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  inbox: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InboxList;
