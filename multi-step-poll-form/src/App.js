
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import PollForm from './components/PollForm';

function App() {
  return (
    <Provider store={store}>
      <PollForm />
    </Provider>
  );
}

export default App;
