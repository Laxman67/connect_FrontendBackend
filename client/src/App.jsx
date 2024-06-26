import React, { useState, useEffect } from "react";


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://glowing-bassoon-94j5gj7v759fpv7-8000.app.github.dev/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <h1>Hello</h1>
    </div>
  );
}

export default App