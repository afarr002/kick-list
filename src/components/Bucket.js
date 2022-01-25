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

  return props.bucket.map(({ isComplete, eagerness }, index) => (
    // TODO: Add a className of `bucket row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items

    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div
      className={
        isComplete
          ? `bucket-row complete ${eagerness}`
          : `bucket-row ${eagerness}`
      }
      key={index}
    >
      // TODO: Add an onClick event that invokes the `completeBucketItem` method
      passing the item id as a argument
      <div key={""} onClick={""}>
        {/* TODO: Add the item text here */}
      </div>
      <div className="icons">
        // TODO: Add an onClick event update the `edit` object with the `id`,
        `value`, and `eagerness` properties
        <p onClick={""}> ✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={""}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
