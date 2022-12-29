import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';
import logo from '../../assets/images/loadingGif.gif';

export default function Loading({ isLoading }) {
  if (isLoading) {
    return (
      <Container>
        <div />
        <span>
          <img src={logo} alt="Carregando..." />
        </span>
      </Container>
    );
  }
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
