import styled from 'styled-components';

const PrivateMessageStyle = styled.div`
  display: flex;
  padding: 26px 0 37px;
  position: relative;
  > div:first-child {
    margin-inline: 11px 23px;
  }
  > div:nth-child(2) {
    > div:first-child {
      display: flex;
      margin-bottom: 3px;
      > h3 {
        font-size: 16px;
        color: var(--primary-blue);
        cursor: pointer;
        margin-right: 16px;
      }
      > p {
        font-size: 14px;
        margin-right: 16px;
        min-width: fit-content;
      }
    }
    > div:last-child {
      > p {
        font-size: 14px;
      }
    }
  }
  > i {
    position: absolute;
    right: 0;
    top: 50%;
  }
`;

export default PrivateMessageStyle;
