import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CLICK_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.CLICK_REQUEST: {
      console.log('Estou fazendo a req');
      return state;
    }

    case types.CLICK_FAIL: {
      console.log('Falha');
      return state;
    }

    default: {
      return state;
    }
  }
}
