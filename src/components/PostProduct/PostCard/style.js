import styled from 'styled-components';

export const GridList = styled.figure`
  ${({ change }) =>
    change
      ? `

@media(max - width: 767 px) {
    overflow - x: auto;
    white - space: nowrap; -
    webkit - overflow - scrolling: touch;
}
`
      : `

display: grid;
grid - template - columns: 1 fr 1 fr 1 fr;
grid - gap: 20 px;
max - width: 1024 px;
text - align: center;
margin: 0 auto;
`};
  grid-gap: ${(props) => props.gap && '20px'};
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 767px) {
    grid-template-columns: ${(props) => (props.single ? '1fr' : '1fr 1fr')};
    margin: 0;
  }
`;
