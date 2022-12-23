import React from 'react';

// import Login from './pages/Login'; // não precisa importar o arquivo index pois ele é importado automaticamente desse jeito
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import history from './services/history';
import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes'; // como Login tá dentro das Routes, não precisa mais importar ele
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

/*
<ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
/>
*/

export default App;
