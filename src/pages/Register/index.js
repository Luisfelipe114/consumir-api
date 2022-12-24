import React, { useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import { get } from 'lodash';
import axios from '../../services/axios';
import history from '../../services/history';

import { Container } from '../../styles/GlobalStyles';
import { Form, Title } from './styled';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres');
    }

    if (!validator.isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    try {
      await axios.post('/users/', {
        nome,
        password,
        email,
      });

      toast.success('Cadastro realizado com sucesso');
      history.push('/login');
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const erros = get(err, 'response.data.errors', []);
      erros.map((erro) => toast.error(erro));
    }
  }

  return (
    <Container>
      <Title>Crie sua conta</Title>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite um email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite uma senha"
          />
        </label>

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
