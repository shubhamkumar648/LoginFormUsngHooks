import React, { useState } from "react";

const NewForm = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const Submit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <>
      <h1> Practice 2 </h1>
      <form onSubmit={Submit}>
        <label> firstname</label>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ firstName: e.target.value })}
        />
        <label> lastname</label>

        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ lastname: e.target.value })}
        />
        <button type="submit">Submit </button>
      </form>
    </>
  );
};

export default NewForm;
