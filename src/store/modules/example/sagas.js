import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
    // toast.success('Requesição feita com sucesso');
  } catch (e) {
    toast.error('Falha na requisição');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.CLICK_REQUEST, exampleRequest)]);
