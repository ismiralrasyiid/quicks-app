import styled from 'styled-components';

const IconButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: ${(props) => (props.primary ? '68px' : '60px')};
  height: ${(props) => (props.primary ? '68px' : '60px')};
  background-color: ${(props) => (props.primary ? 'var(--primary-blue)' : '#F2F2F2')};
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    filter: brightness(85%);
  }
`;

export default IconButtonStyle;
