import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Header from './Header';
import usersReducer, { resetUsers } from '../../redux/usersSlice';

// Mock the `resetUsers` action
jest.mock('../../redux/usersSlice', () => ({
  ...jest.requireActual('../../redux/usersSlice'),
  resetUsers: jest.fn(() => ({ type: 'users/resetUsers' })),
}));

// Create a mock Redux store
const storeTest = configureStore({
  reducer: {
    users: usersReducer,
  },
});

describe('Header Component', () => {
  it('renders correctly and dispatches resetUsers action on click', () => {
    // Render the component with the mock store
    render(
      <Provider store={storeTest}>
        <Header />
      </Provider>
    );

    expect(screen.getByText(/Search/i)).toBeInTheDocument();

    const headerDiv = screen.getByText(/Search/i);
    fireEvent.click(headerDiv);

    expect(resetUsers).toHaveBeenCalled();
  });
});
