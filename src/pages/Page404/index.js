import React from 'react';

import { Container } from '../../styles/GlobalStyles';
// import history from '../../services/history';

export default function Page404() {
  // history.push('/'); // redireciona qualquer página que não existe para a home
  return (
    <Container>
      <h1>Esta página não existe</h1>
    </Container>
  );
}
