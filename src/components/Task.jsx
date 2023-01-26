import React, { useState } from 'react';
import ButtonStyle from './styles/ButtonStyle';
import DropdownButton from './styles/DropdownButton';
import PopupContainerStyle from './styles/PopupCointainerStyle';
import TaskButtonsLayout from './styles/TaskButtonsLayout';
import { ReactComponent as ArrowDown } from '../assets/arrowdown.svg';
import DropdownItems from './styles/DropdownItems';

function Task() {
  const [isSelecting, setIsSelecting] = useState(false);
  const onDropdownBtnClick = () => {
    setIsSelecting(!isSelecting);
  };

  return (
    <PopupContainerStyle>
      <TaskButtonsLayout>
        <DropdownButton onClick={onDropdownBtnClick}>
          My Tasks
          <ArrowDown />
          {isSelecting ? (
            <DropdownItems onClick={(event) => event.stopPropagation()}>
              <span>Personal Errands</span>
              <hr />
              <span>Urgent To-Do</span>
            </DropdownItems>
          ) : null}
        </DropdownButton>
        <ButtonStyle>New Task</ButtonStyle>
      </TaskButtonsLayout>
    </PopupContainerStyle>
  );
}

export default Task;
