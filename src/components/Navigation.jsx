import React, { useState } from 'react';
import IconButton from './IconButton';
import Inbox from './Inbox';
import NavigationStyle from './styles/NavigationStyle';

function Navigation() {
  const [isClosed, setIsClosed] = useState(true);
  const [isActive, setIsActive] = useState('');

  const toggleIsClosed = () => {
    setIsClosed(!isClosed);
  };

  const iconHandler = (type) => {
    setIsActive(type);
  };

  return (
    <>
      <NavigationStyle>
        {isActive
          ? (
            <div className="isActive">
              <IconButton
                type={isActive === 'task' ? 'taskactive' : 'task'}
                model={isActive === 'task' ? 'active' : 'secondary'}
                handler={() => iconHandler('task')}
              />
              <IconButton
                type={isActive === 'inbox' ? 'inboxactive' : 'inbox'}
                model={isActive === 'inbox' ? 'active' : 'secondary'}
                handler={() => iconHandler('inbox')}
              />
            </div>
          )
          : (
            <>
              <div className={isClosed ? 'isClosed' : ''}>
                <IconButton type="task" model="secondary" handler={() => iconHandler('task')} />
                <IconButton type="inbox" model="secondary" handler={() => iconHandler('inbox')} />
              </div>
              <IconButton type="quicks" model="primary" handler={toggleIsClosed} />
            </>
          )}
      </NavigationStyle>
      {isActive === 'inbox' ? <Inbox /> : null}
    </>
  );
}

export default Navigation;
