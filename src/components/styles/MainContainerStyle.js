import styled from 'styled-components';

const MainContainerStyle = styled.div`
  max-width: 1635px;
  height: 100vh;

  @media only screen and (min-width: 1636px) {
    margin-left: calc(100vw - 1635px);
    border-left: 1px solid var(--primary-light);
  }
`;

export default MainContainerStyle;
