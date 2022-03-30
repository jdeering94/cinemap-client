import React from 'react';
import { getAllUsers, deleteUser } from '../api/auth';
import { isAdmin } from '../lib/authentication';

const UserList = () => {
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const user = await getAllUsers();
      setUsers(user);
    };
    getData();
  }, []);

  const handleUserDelete = async (userId) => {
    if (isAdmin()) {
      await deleteUser(userId);
      const user = await getAllUsers();
      setUsers(user);
    } else {
      window.alert('You must be an Admin to delete a User');
    }
  };

  return (
    <>
      <h1 className="title">User List</h1>
      {users ? (
        <div className="container">
          <div className="columns is-multiline">
            {users.map((user) => (
              <div key={user._id} className="column card m-3 is-one-fifth">
                <h2 className="card-header">{user.username}</h2>
                <h2 className="card-header">
                  Films Liked: {user.likedFilms.length}
                </h2>
                {isAdmin() && (
                  <button
                    key={user._id}
                    type="button"
                    className="button is-danger"
                    onClick={() => handleUserDelete(user._id)}
                  >
                    Delete User
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default UserList;
