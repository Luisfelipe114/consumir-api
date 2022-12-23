import * as types from '../types';

export function clicaBotaoRequest() {
  return {
    type: types.CLICK_REQUEST,
  };
}

export function clicaBotaoSuccess() {
  return {
    type: types.CLICK_SUCCESS,
  };
}

export function clicaBotaoFailure() {
  return {
    type: types.CLICK_FAIL,
  };
}
