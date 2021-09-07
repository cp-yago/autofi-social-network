import React from 'react';

import Container from './HeaderStyles';

import AutofiLogo from '../../assets/img/logo-autofi@2x.png';

const Header = () => (
  <Container data-testid="header-container">
    <img src={AutofiLogo} alt="Logo" />
  </Container>
);

Header.defaultProps = {
  showGoBackButton: false,
};

export default Header;
