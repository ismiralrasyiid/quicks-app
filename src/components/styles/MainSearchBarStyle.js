import styled from 'styled-components';

const MainSearchBarStyle = styled.form`
  width: 100%;

  & > label {
    display: flex;
    width: 100%;
    height: 58px;
    background-color: var(--primary-dark-light);
    align-items: center;
    cursor: pointer;

    & > img {
      width: 16px;
      height: 16px;
      margin-inline: 26px 13px;
    }
  
    & > input {
      display: inline-block;
      width: calc(100% - 95px);
      padding: 7px;
      color: var(--primary-light);
      background-color: var(--primary-dark-light);
      cursor: pointer;

      &:focus {
        outline: 1px solid var(--primary-light);
      }
    }
  }

`;

export default MainSearchBarStyle;
