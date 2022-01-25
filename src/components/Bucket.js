import React, { useState } from "react";
import BucketForm from "./BucketForm";

const Bucket = ({
  editBucketItem,
  bucket,
  completeBucketItem,
  removeBucketItem,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    eagerness: "",
  });

  const submitUpdate = (value) => {
    editBucketItem(edit.id, value);
    setEdit({
      id: null,
      value: "",
      eagerness: "",
    });
  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return bucket.map(({ isComplete, eagerness, id, text }, index) => (
    <div
      className={
        isComplete
          ? `bucket-row complete ${eagerness}`
          : `bucket-row ${eagerness}`
      }
      key={index}
    >
      <div key={id} onClick={(_) => completeBucketItem(id)}>
        {text}
      </div>
      <div className="icons">
        <p
          onClick={(_) =>
            setEdit({
              id: id,
              value: text,
              eagerness: eagerness,
            })
          }
        >
          ✏️
        </p>
        <p onClick={(_) => removeBucketItem(id)}> 🗑️</p>
      </div>
    </div>
  ));
};

export default Bucket;
