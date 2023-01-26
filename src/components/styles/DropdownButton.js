import styled from 'styled-components';

const DropdownButton = styled.button`
  padding: 9px 16px 14px 13px;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  color: var(--primary-dark);
  border-radius: 5px;
  background-color: white;
  border: 1px solid var(--primary-dark-light);
  display: flex;
  align-items: baseline;
  position: relative;
  > svg {
    width: 10px;
    height: 6px;
    margin-left: 12px;
  }
`;

export default DropdownButton;
