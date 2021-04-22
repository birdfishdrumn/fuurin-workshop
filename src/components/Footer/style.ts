import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  color: dimgray;
  margin: auto 0;
  background-image: none;
  background-size: cover;
  background-color: #fff;
  position: relative;
  box-sizing: border-box;
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  position: absolute;
  bottom: 0;
`;

export const FooterNav = styled.ul`
  justify-content: center;
  list-style: none;
  display: flex;
  font-size: 1rem;
  text-align: center;
  color: dimgray;
  padding-top: 5px;
  @media (max-width: 768px) {
    flex-direction: ${(props) => !props.sns && 'column'};
    text-align: center;
    font-size: 0.9rem;
    margin: 5px 10px;
  }
  > li {
    margin: 15px;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;

export const Privacy = styled.div`
  cursor: pointer;
  text-align: center;
  padding: 20px 0 20px 0;
  @media (max-width: 767px) {
    flex-direction: column;
    margin: 0 auto;
  }
  > p {
    margin: 15px;
    font-size: 0.8rem;
  }
`;
