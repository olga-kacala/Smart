import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, filterUsers } from "../../redux/usersSlice";
import { RootState, AppDispatch } from "../../redux/store";
import classes from "./UserTable.module.css";

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, filteredUsers, loading, error, filterValues } = useSelector(
    (state: RootState) => state.users
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilterState = { ...filterValues, [name]: value };
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
          value={filterValues.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Search by username"
          value={filterValues.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Search by email"
          value={filterValues.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Search by phone"
          value={filterValues.phone}
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
