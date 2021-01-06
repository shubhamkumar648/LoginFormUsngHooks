import React, { useState } from "react";

const Reform = () => {
  const [name, setName] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    setName((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const Submit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <>
      <h1> Practice 3 (optimisation of code) </h1>
      <form onSubmit={Submit}>
        <label> username</label>
        <input
          type="text"
          name="username"
          value={name.username}
          onChange={handleSubmit}
        />

        <label> password</label>

        <input
          type="password"
          name="password"
          value={name.password}
          onChange={handleSubmit}
        />
        <button type="submit">Submit </button>
      </form>
    </>
  );
};

export default Reform;
