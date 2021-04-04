import './App.css';
import LogoutButton from './components/LogoutButton'
import Home from './components/Home'
import LoginButton from './components/LoginButton';
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import ebconfig from './ebconfig';
import { useAuth0 } from '@auth0/auth0-react';
import bg from'./bamboo/Login.png';

function App() {
  
  const {isAuthenticated} = useAuth0();
   if (isAuthenticated) {
     return(
      <Main>
        <EasybaseProvider ebconfig={ebconfig}>
          <Home />
            <Footer>
            <LogoutButton/>
          </Footer>
        </EasybaseProvider>
      </Main>
     )
   }
   else{
     return(
     <LoginBox>
      <LoginButton />
     </LoginBox>
     )
   }
}

export default App;

const Main = styled.div`
  position: absolute;
  top: 0;
`
const Footer = styled.div`
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
<<<<<<< HEAD
  z-index: 1000;
=======
`

const LoginBox = styled.div`
    background-image: url(${bg});

>>>>>>> 3d0b29d97b0d084062cdcf9a3668955b64f6b37f
`