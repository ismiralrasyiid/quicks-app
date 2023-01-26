import styled from 'styled-components';

const TaskButtonsLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  > button:first-child {
    margin-left: 80px;
  }
`;

export default TaskButtonsLayout;
