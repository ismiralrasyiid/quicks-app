import React from 'react';
import PropTypes from 'prop-types';
import PrivateMessageIcon from './PrivateMessageIcon';
import PrivateMessageStyle from './styles/PrivateMessageStyle';
import RedDot from './styles/RedDot';

function PrivateMessage({
  title,
  createdAt,
  lastMessage,
}) {
  return (
    <PrivateMessageStyle>
      <PrivateMessageIcon letter={lastMessage.user[0]} />
      <div>
        <div>
          <h3>{title}</h3>
          <p>{createdAt}</p>
        </div>
        <div>
          <p>{lastMessage.message}</p>
        </div>
      </div>
      {lastMessage.read ? null : <RedDot />}
    </PrivateMessageStyle>
  );
}

PrivateMessage.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  lastMessage: PropTypes.object.isRequired,
};

export default PrivateMessage;
