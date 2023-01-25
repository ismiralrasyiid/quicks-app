import styled from 'styled-components';

const InboxSearchBarStyle = styled.form`
  width: 100%;

  > label {
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid var(--primary-dark-light);
    border-radius: 5px;

    > input {
      display: block;
      border-radius: 5px;
      padding: 10px 0 10px 59px;
      width: calc(100% - 71px);
      height: 32px;
    }

    > img {
      display: block;
      width: 12px;
      height: 12px;
    }
  }
`;

export default InboxSearchBarStyle;
