import React from "react";
import "./styles.css";
import Form from "./Form";
import NewForm from "./NewForm";
import Reform from "./Reform";

export default function App() {
  return (
    <div className="App">
      <h1>Namaste Hooks🙏(Day2)</h1>
      <h2> useState using object</h2>
      <Form />
      <hr />
      <NewForm />
      <hr />
      <Reform />
    </div>
  );
}
