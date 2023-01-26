import React from 'react';
import PropTypes from 'prop-types';
import GroupMessageIcon from './GroupMessageIcon';
import GroupMessageStyle from './styles/GroupMessageStyle';
import RedDot from './styles/RedDot';

function GroupMessage({
  title,
  createdAt,
  lastMessage,
}) {
  return (
    <GroupMessageStyle>
      <GroupMessageIcon />
      <div>
        <div>
          <h3>{title}</h3>
          <p>{createdAt}</p>
        </div>
        <div>
          <h4>
            {lastMessage.user}
            &nbsp;:
          </h4>
          <p>{lastMessage.message}</p>
        </div>
      </div>
      {lastMessage.read ? null : <RedDot />}
    </GroupMessageStyle>
  );
}

GroupMessage.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  lastMessage: PropTypes.object.isRequired,
};

export default GroupMessage;
