import styled from 'styled-components';

const DropdownItems = styled.div`
  border: 1px solid var(--primary-dark-light);
  border-radius: 5px;
  width: 288px;
  position: absolute;
  top: calc(100% + 7px);
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  > span {
    display: block;
    padding: 15px;
  }
`;

export default DropdownItems;
