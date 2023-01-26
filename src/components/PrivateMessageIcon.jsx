import React from 'react';
import PropTypes from 'prop-types';
import UserIconStyle from './styles/UserIconStyle';

function PrivateMessageIcon({ letter }) {
  return (
    <UserIconStyle primary>
      <span>{letter}</span>
    </UserIconStyle>
  );
}

PrivateMessageIcon.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default PrivateMessageIcon;
