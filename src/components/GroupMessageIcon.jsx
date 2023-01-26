import React from 'react';
import UserIconStyle from './styles/UserIconStyle';
import { ReactComponent as Userlight } from '../assets/userlight.svg';
import { ReactComponent as Userdark } from '../assets/userdark.svg';
import GroupIconStyle from './styles/GroupIconStyle';

function GroupMessageIcon() {
  return (
    <GroupIconStyle>
      <UserIconStyle>
        <Userdark />
      </UserIconStyle>
      <UserIconStyle primary>
        <Userlight />
      </UserIconStyle>
    </GroupIconStyle>
  );
}

export default GroupMessageIcon;
