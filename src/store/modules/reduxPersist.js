import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMIR-API',
      storage,
      whitelist: ['reducerAuth'], // o nome usado em rootReducer
    },
    reducers
  );

  return persistedReducers;
};
