import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, filterUsers } from "../redux/usersSlice";
import { RootState, AppDispatch } from "../redux/store";
import classes from "./UserTable.module.css";

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, filteredUsers, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const [filterState, setFilterState] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilterState = { ...filterState, [name]: value };
    setFilterState(newFilterState);
    dispatch(filterUsers(newFilterState));

    if (users.length === 0) {
      dispatch(fetchUsers()).then(() => {
        dispatch(filterUsers(newFilterState));
      });
    } else {
      dispatch(filterUsers(newFilterState));
    }
  };

  return (
    <div className={classes.searchContainer}>
      <div className={classes.inputContainer}>
        <input
          type="text"
          name="name"
          placeholder="Search by name"
          value={filterState.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Search by username"
          value={filterState.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Search by email"
          value={filterState.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Search by phone"
          value={filterState.phone}
          onChange={handleInputChange}
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <table className={classes.tableContainer}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
