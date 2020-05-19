import React from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Content from './Content';
import { onMessage } from './service/mockServer';
import { store } from './state/store';
import { ToastMessagesContainer } from './components/ToastMessagesContainer';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Container>
          <Content />
          <ToastMessagesContainer />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
