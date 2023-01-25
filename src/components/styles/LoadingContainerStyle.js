import styled from 'styled-components';

const LoadingContainerStyle = styled.div`
  display: flex;
  width: 100%;
  height: 665px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 22px;

  > span {
    font-size: 14px;
    line-height: 14px;
    text-transform: capitalize;
    font-weight: bold;
    color: var(--primary-dark)
  }
`;

export default LoadingContainerStyle;
