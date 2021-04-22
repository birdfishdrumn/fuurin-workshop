import React from 'react';
import { FooterWrapper, FooterNav, Privacy } from './style';
import logo from 'assets/img/icons/logo2.png';
import { useDispatch } from 'react-redux';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { push } from 'connected-react-router';
import { openOutsideLink } from 'functions/function';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const dispatch = useDispatch();
  return (
    <FooterWrapper>
      <FooterNav>
        <li onClick={() => dispatch(push('/help'))}>ヘルプ</li>
        <li onClick={() => dispatch(push('/terms'))}>利用規約</li>
        <li onClick={() => dispatch(push('/policy'))}>プライバシーポリシー</li>
        <li onClick={() => dispatch(push('/workshopkit'))}>体験キットのご購入</li>
        <li onClick={() => dispatch(push('/about'))}>江戸風鈴</li>
        <li
          onClick={() =>
            openOutsideLink(
              'https://docs.google.com/forms/d/e/1FAIpQLSfubjAQYCXXEdX0f4VbL-iVO4_z80vcLP5Tla-54TR0NLfr9A/viewform'
            )
          }
        >
          お問い合わせ
        </li>
      </FooterNav>
      <FooterNav sns>
        <li onClick={() => openOutsideLink('https://twitter.com/maruyosi_fuurin')}>
          <TwitterIcon style={{ fontSize: '30px' }} />
        </li>
        <li onClick={() => openOutsideLink('https://www.instagram.com/maruyosi_edofuurin/')}>
          <InstagramIcon style={{ fontSize: '30px' }} />
        </li>
      </FooterNav>
      <div className="center">
        <img src={logo} alt="ec" width="128px" onClick={() => dispatch(push('/'))} />
      </div>
      <Privacy>
        <p>{year} &copy; 篠原まるよし風鈴 All Rights Reserved.</p>
      </Privacy>
    </FooterWrapper>
  );
};
export default Footer;
