import styled from 'styled-components';

const IconButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 68px;
  height: 68px;
  background-color: var(--primary-blue);
  cursor: pointer;
  position: relative;
  transition: transform ease-out .4s;

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    filter: brightness(85%);
  }
`;

const SecondaryIconButtonStyle = styled(IconButtonStyle)`
  width: 60px;
  height: 60px;
  background-color: var(--secondary-light);

  &:before {
    content: ${(props) => `"${props.type}"`};
    text-transform: capitalize;
    position: absolute;
    width: 60px;
    line-height: 12px;
    left: 0;
    top: 0;
    margin-top: -24px;
    color: #F2F2F2;
    font-size: 12px;
    z-index: -10;
    transition: margin ease-in .6s;
  }
`;

const ActiveIconButtonStyle = styled(IconButtonStyle)`
  box-shadow: -15px 0 0 var(--primary-dark);
  background-color: ${(props) => (props.type === 'inboxactive' ? 'var(--violet-indicator)' : 'var(--orange-indicator)')};
  order: 1;
`;

export default IconButtonStyle;
export { SecondaryIconButtonStyle, ActiveIconButtonStyle };
