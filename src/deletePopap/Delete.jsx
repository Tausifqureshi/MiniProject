import React from 'react';
function Delete({ onDelete, onClose }) {
//   const handleDelete = () => {
//     onDelete();
//     onClose();
//   };

  return (
    <div className="delete-popup">
      <h2>Are you sure you want to delete this item?</h2>
      {/* <button onClick={handleDelete}>Yes, delete</button>
      <button onClick={onClose}>No, cancel</button> */}
    </div>
  );
}
export default Delete;

































