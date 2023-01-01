import React, { useState } from 'react';
import { toast } from 'react-toastify';
import validator from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

import { Container } from '../../styles/GlobalStyles';
import { Form, Title } from './styled';

export default function Register() {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.reducerAuth.user.id);
  const nomeStored = useSelector((state) => state.reducerAuth.user.nome);
  const emailStored = useSelector((state) => state.reducerAuth.user.email);

  const isLoading = useSelector((state) => state.reducerAuth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useEffect(() => {
    if (!id) return;
    setNome(nomeStored);
    setEmail(emailStored);
  }, [emailStored, id, nomeStored]);

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

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, id }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{!id ? 'Crie sua conta' : 'Editar dados'}</Title>

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

        <button type="submit">{!id ? 'Cadastrar' : 'Salvar'}</button>
      </Form>
    </Container>
  );
}
