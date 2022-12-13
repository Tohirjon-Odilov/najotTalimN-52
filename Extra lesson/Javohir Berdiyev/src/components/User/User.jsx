import React from "react";

const User = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.username}</p>
        </div>
      ))}
    </div>
  );
};

export default User;
