import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_USER, DELETE_USER, UPDATE_USER } from './actionType';

const User = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  function handleSubmit() {

    if (!name) return;

    if (editId) {

      dispatch({
        type: UPDATE_USER,
        payload: { id: editId, name }
      });

      setEditId(null);

    } else {

      dispatch({
        type: ADD_USER,
        payload: { id: Date.now(), name }
      });

    }

    setName("");
  }

  function deleteUser(id) {
    dispatch({
      type: DELETE_USER,
      payload: id
    });
  }

  function editUser(user) {
    setName(user.name);
    setEditId(user.id);
  }

  return (
    <div className='box'>

      <h2>User CRUD Redux</h2>

      <input
        type="text"
        value={name}
        placeholder='Enter name'
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update User" : "Add User"}
      </button>

      {
        users.map((user) => (
          <div key={user.id} className='userRow'>

            {user.name}

            <button onClick={() => editUser(user)} className='editBtn'>
              Edit
            </button>

            <button onClick={() => deleteUser(user.id)} className='deleteBtn'>
              Delete
            </button>

          </div>
        ))
      }

    </div>
  )
}

export default User