import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <>
      <hr />
      <h1>Practice 1</h1>
      <form>
        <label>firstname</label>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ firstname: e.target.value })}
        />
        <label>Lastname</label>
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ lastname: e.target.value })}
        />
        <h2>name is:{name.firstname}</h2>
        <h2>name is:{name.lastname}</h2>
      </form>
    </>
  );
};

export default Form;
