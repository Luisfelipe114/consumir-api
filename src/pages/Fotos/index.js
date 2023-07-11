import React from 'react';

import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Form, Title } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Fotos({ match }) {
  const id = get(match, 'params.id', '');
  const [isLoading, setIsLoading] = React.useState(false);

  const [foto, setFoto] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Fotos[0].url', ''));
        setIsLoading(false);
      } catch (err) {
        toast.error('Erro ao obter imagem');
        setIsLoading(false);
        history.push('/');
      }
    };

    getData();
  }, [id, setFoto, setIsLoading]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" /> : 'Selecionar'}
          <input type="file" id="foto" />
        </label>
      </Form>
    </Container>
  );
}

Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
