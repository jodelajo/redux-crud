import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./features/users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  console.log("userlist", userList);
  const [newUser, setNewUser] = useState({
    id: 0,
    name: "",
    username: "",
  });

  const onChangeHandlerName = (e) => {
    e.preventDefault();
    setNewUser({ ...newUser, name: e.target.value, id: userList.length + 1 });
  };

  const onChangeHandlerUsername = (e) => {
    e.preventDefault();
    setNewUser({ ...newUser, username: e.target.value });
  };

  console.log("new user", newUser);
  console.log(userList.length);

  return (
    <div className="App">
      <div className="addUser">
        <input
          name="name"
          type="text"
          placeholder="Name..."
          onChange={onChangeHandlerName}
        />
        <input
          type="text"
          placeholder="Username..."
          name="username"
          onChange={onChangeHandlerUsername}
        />
        <button onClick={() => dispatch(addUser(newUser))}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h2>{user.username}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
