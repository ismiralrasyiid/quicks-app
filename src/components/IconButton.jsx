import React from 'react';
import PropTypes from 'prop-types';
import IconButtonStyle from './styles/IconButtonStyle';
import { ReactComponent as quicks } from '../assets/quicks.svg';
import { ReactComponent as inbox } from '../assets/inbox.svg';
import { ReactComponent as task } from '../assets/task.svg';

const icon = {
  quicks,
  inbox,
  task,
};

function IconButton({ type, primary }) {
  const Icon = icon[type];

  return (
    <IconButtonStyle primary={primary}>
      <Icon />
    </IconButtonStyle>
  );
}

IconButton.defaultProps = {
  primary: false,
};

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  primary: PropTypes.bool,
};

export default IconButton;
