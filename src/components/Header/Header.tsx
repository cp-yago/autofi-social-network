import React from 'react';
import { ArrowLeft } from 'react-feather';
import { useHistory } from 'react-router-dom';

import Container from './HeaderStyles';

import AutofiLogo from '../../assets/img/logo-autofi@2x.png';

interface HeaderProps {
  showGoBackButton?: boolean;
}

const Header = ({ showGoBackButton }: HeaderProps) => {
  const history = useHistory();

  return (
    <Container data-testid="header-container">
      {showGoBackButton && (
        <ArrowLeft
          onClick={() => history.push('/')}
          data-testid="go-back-button"
        />
      )}
      <img src={AutofiLogo} alt="Logo" />
    </Container>
  );
};

Header.defaultProps = {
  showGoBackButton: false,
};

export default Header;
