import React from 'react';

import Router from './Router';
import './assets/reset.css';
import './assets/style.css';
import { Footer, BottomNavigator } from './components/Footer';
import { Header } from './components/Header';
import { Loading, ScrollTop, Snackbar } from './components/UI';
import Auth from './Auth';
import { Main } from 'assets/GlobalLayoutStyle';
import { GlobalDialog, ConfirmModal } from 'components/UI/index';
const App = () => {
  return (
    <Loading>
      <Header />
      <ScrollTop>
        <Main>
          <Router />
          <Snackbar />
        </Main>
      </ScrollTop>
      <ConfirmModal />
      <GlobalDialog />
      <Auth notUseEffect>
        <BottomNavigator />
        <div className="mobile_only">
          <Footer />
        </div>
      </Auth>
    </Loading>
  );
};

export default App;
