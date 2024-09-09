import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../../redux/usersSlice";
import UserTable from "./UserTable"; 

// Example mock data that simulates the data returned from API
const mockUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
  },

];

test("renders correctly with mock state", async () => {
  // Set up the mock store with the mock user data
  const mockStore = configureStore({
    reducer: {
      users: usersReducer,
    },
    preloadedState: {
      users: {
        users: mockUsers,
        filteredUsers: mockUsers,
        loading: false,
        error: null,
        filterValues: {
          name: "",
          username: "",
          email: "",
          phone: "",
        },
      },
    },
  });

  render(
    <Provider store={mockStore}>
      <UserTable />
    </Provider>
  );

  // Wait for the component to update with user data
  await waitFor(() => {
    expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
    expect(screen.getByText(/Bret/i)).toBeInTheDocument();
    expect(screen.getByText(/Sincere@april.biz/i)).toBeInTheDocument();
    expect(screen.getByText(/1-770-736-8031 x56442/i)).toBeInTheDocument();

    expect(screen.getByText(/Ervin Howell/i)).toBeInTheDocument();
    expect(screen.getByText(/Antonette/i)).toBeInTheDocument();
    expect(screen.getByText(/Shanna@melissa.tv/i)).toBeInTheDocument();
    expect(screen.getByText(/010-692-6593 x09125/i)).toBeInTheDocument();
  });
});
