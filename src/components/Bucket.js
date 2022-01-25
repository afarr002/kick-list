import React, { useState } from "react";
import BucketForm from "./BucketForm";

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    eagerness: "",
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value);
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

  return props.bucket.map(({ isComplete, eagerness, id, text }, index) => (
    <div
      className={
        isComplete
          ? `bucket-row complete ${eagerness}`
          : `bucket-row ${eagerness}`
      }
      key={index}
    >
      <div key={id} onClick={() => props.completeBucketItem(id)}>
        {text}
      </div>
      <div className="icons">
        // TODO: Add an onClick event update the `edit` object with the `id`,
        `value`, and `eagerness` properties
        <p
          onClick={() =>
            setEdit({
              id: id,
              value: text,
              eagerness: eagnerness,
            })
          }
        >
          ✏️
        </p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={() => props.removeBucketItem(id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
