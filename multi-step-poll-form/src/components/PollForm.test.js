
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import PollForm from './PollForm';

test('renders PollForm and navigates through steps', () => {
  render(
    <Provider store={store}>
      <PollForm />
    </Provider>
  );

  expect(screen.getByText('Question 1')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Option 1'));
  fireEvent.click(screen.getByText('Next'));
  expect(screen.getByText('Question 2')).toBeInTheDocument();
});
