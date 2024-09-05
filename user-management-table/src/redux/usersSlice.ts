import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UsersState {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
};

const normalizePhone = (phone: string) => phone.replace(/\D/g, "");

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterUsers: (state, action) => {
      const { name, username, email, phone } = action.payload;
      const normalizedPhone = normalizePhone(phone);

      state.filteredUsers = state.users.filter(
        (user) =>
          user.name.toLowerCase().includes(name.toLowerCase()) &&
          user.username.toLowerCase().includes(username.toLowerCase()) &&
          user.email.toLowerCase().includes(email.toLowerCase()) &&
          normalizePhone(user.phone).includes(normalizedPhone)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { filterUsers } = usersSlice.actions;
export default usersSlice.reducer;
