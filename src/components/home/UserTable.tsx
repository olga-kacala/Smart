import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, filterUsers } from "../../redux/usersSlice";
import { RootState, AppDispatch } from "../../redux/store";
import classes from "./UserTable.module.css";

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { filteredUsers, loading, error, filterValues } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());//This ensures that fetchUsers is only called when the component first renders, not on every re-render
  }, [dispatch]); //Even though dispatch does not change (since it's provided by Redux and is stable), it is recommended to include it in the dependency array.

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilterState = { ...filterValues, [name]: value };
    dispatch(filterUsers(newFilterState));
  };

  return (
    <div className={classes.searchContainer}>
      <div className={classes.inputContainer}>
        <div className={classes.inputWrapper}>
          <i className={`${classes.icon} fas fa-search`}></i>
          <input
            type="text"
            name="name"
            placeholder="Search by name"
            value={filterValues.name}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.inputWrapper}>
          <i className={`${classes.icon} fas fa-search`}></i>
          <input
            type="text"
            name="username"
            placeholder="Search by username"
            value={filterValues.username}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.inputWrapper}>
          <i className={`${classes.icon} fas fa-search`}></i>
          <input
            type="text"
            name="email"
            placeholder="Search by email"
            value={filterValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.inputWrapper}>
          <i className={`${classes.icon} fas fa-search`}></i>
          <input
            type="text"
            name="phone"
            placeholder="Search by phone"
            value={filterValues.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className={classes.tableWrapper}>
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
                  <td data-label="Name">{user.name}</td>
                  <td data-label="Username">{user.username}</td>
                  <td data-label="Email">
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td data-label="Phone">
                    <a href={`tel:${user.phone}`}>{user.phone}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserTable;
