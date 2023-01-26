import styled from 'styled-components';

const GroupMessageStyle = styled.div`
  display: flex;
  padding: 26px 0 37px;
  border-bottom: 1px solid var(--primary-blue);
  position: relative;
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
      > h4 {
        font-size: 14px;
        margin-bottom: 1px;
      }
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

export default GroupMessageStyle;
