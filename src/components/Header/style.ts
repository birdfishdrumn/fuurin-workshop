import styled from 'styled-components';

export const PopperWrapper = styled.div`
  width: 250px;
  max-height: 300px;
`;

export const MinText = styled.h1`
  font-size: 0.9rem;
  font-weight: bold;
  padding: ${(props) => props.padding && '10px'};
`;

export const PushWrapper = styled.div`
  margin: 5px auto;
  text-align: center;
  max-width: 250px;
`;
