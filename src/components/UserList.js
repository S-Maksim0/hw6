import React, { useState, useEffect } from 'react';
import ShowAlbum from './ShowAlbum';
import ShowPhotos from './ShowPhotos';

function ShowUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUserIdAlbum, setSelectedUserIdAlbum] = useState();
  const [selectedUserIdPic, setSelectedUserIdPic] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAlbumButtonClick = (userId) => {
    if (selectedUserIdAlbum === userId) {
      setSelectedUserIdAlbum(null);
    } else {
      setSelectedUserIdAlbum(userId);
    }
  };

  const handlePictureButtonClick = (userId) => {
    if (selectedUserIdPic === userId) {
      setSelectedUserIdPic(null);
    } else {
      setSelectedUserIdPic(userId);
    }
  };

  return (
    <div className="container mt-5">
      {users.map((user) => (
        <div key={user.id}>
          <p>
            ID: {user.id} | Name: {user.name} | Username: {user.username} | Email: {user.email} | Phone: {user.phone}
          </p>
          <button className="btn btn-primary" onClick={() => handleAlbumButtonClick(user.id)}>
            {selectedUserIdAlbum === user.id ? 'Hide Albums' : 'Show Albums'}
          </button>
          <button className="btn btn-primary" onClick={() => handlePictureButtonClick(user.id)}>
            {selectedUserIdPic === user.id ? 'Hide Photos' : 'Show Photos'}
          </button>
          {selectedUserIdAlbum === user.id && <ShowAlbum userId={user.id} />}
          {selectedUserIdPic === user.id && <ShowPhotos userId={user.id} />}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ShowUsers;
