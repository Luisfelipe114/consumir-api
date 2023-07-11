import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Paragrafo = styled.p``; // sem estilizar

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: ${colors.primaryDarkColor};
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border: 5px dashed ${colors.primaryColor};
    margin: 30px auto;
    border-radius: 50%;
    overflow: hidden;
  }

  img {
    width: 180px;
    height: 180px;
  }

  input {
    display: none;
  }
`;
