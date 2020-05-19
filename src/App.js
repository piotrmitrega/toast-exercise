import React from 'react';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Content from './Content';
import { onMessage } from './service/mockServer';
import { store } from './state/store';

function App() {
  onMessage(console.log);

  return (
    <Provider store={store}>
      <div>
        <Header />
        <Container>
          <Content />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
