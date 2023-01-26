import styled from 'styled-components';

const UserIconStyle = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${(props) => (props.primary ? 'var(--primary-blue)' : 'var(--primary-light)')};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  > svg {
    width: 12px;
    height: 12px;
  }
  
  > span {
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }
`;

export default UserIconStyle;
