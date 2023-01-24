import React from 'react';
import PropTypes from 'prop-types';
import IconButtonStyle, { ActiveIconButtonStyle, SecondaryIconButtonStyle } from './styles/IconButtonStyle';
import { ReactComponent as quicks } from '../assets/quicks.svg';
import { ReactComponent as inbox } from '../assets/inbox.svg';
import { ReactComponent as inboxactive } from '../assets/inboxactive.svg';
import { ReactComponent as task } from '../assets/task.svg';
import { ReactComponent as taskactive } from '../assets/taskactive.svg';

const icon = {
  quicks,
  inbox,
  inboxactive,
  task,
  taskactive,
};

const wrapper = {
  primary: IconButtonStyle,
  secondary: SecondaryIconButtonStyle,
  active: ActiveIconButtonStyle,
};

function IconButton({
  type,
  model,
  handler,
}) {
  const Icon = icon[type];
  const Wrapper = wrapper[model];

  return (
    <Wrapper
      type={type}
      onClick={handler}
    >
      <Icon />
    </Wrapper>
  );
}

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default IconButton;
