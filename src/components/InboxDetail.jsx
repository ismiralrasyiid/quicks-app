import React from 'react';
import PropTypes from 'prop-types';

function InboxDetail({ currentMessages, onInboxListClick }) {
  return (
    <>
      <h4>{currentMessages.user}</h4>
      <p>{currentMessages.message}</p>
      {currentMessages.read ? null : <p>This is new message</p>}
      <button type="button" onClick={() => onInboxListClick(null, 'list')}>Back</button>
    </>
  );
}

InboxDetail.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentMessages: PropTypes.object.isRequired,
  onInboxListClick: PropTypes.func.isRequired,
};

export default InboxDetail;
