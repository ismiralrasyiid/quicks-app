import styled from 'styled-components';

const NavigationStyle = styled.div`
  position: fixed;
  right: 34px;
  bottom: 0px;
  display: flex;
  align-items: center;
  gap: 26px;
  
  > button {
    z-index: 10;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 26px;
    margin-right: -60px;
    padding: 31px 60px;
    overflow: hidden;
  }

  > .isClosed {
    button {
      transform: translateX(175px);
      &:before {
        margin-top: 24px;
        transition: margin ease-in .2s;
      }
    }
  }

  > .isActive {
    padding: 27px 60px;
    > button {
      &:before {
        content: '';
      }
    }
  }
`;

export default NavigationStyle;
