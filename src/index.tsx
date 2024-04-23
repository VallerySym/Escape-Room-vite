import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { quests } from './mocks/quests';
import { store } from './store';
import { fetchQuests } from './store/api-actions';
import { ToastContainer } from 'react-toastify';

store.dispatch(fetchQuests());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer />
      <App quests={quests} />
    </Provider>
  </React.StrictMode>
);
