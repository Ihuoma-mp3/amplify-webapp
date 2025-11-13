import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const callApi = async () => {
    try {
      const response = await fetch("https://qkropoqjmb.execute-api.us-east-2.amazonaws.com/default/signupHandler");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error calling API");
    }
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, Precious! 🎉</h1>
      <p>Your app is now connected to AWS Lambda + API Gateway!</p>

      <button
        onClick={callApi}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "8px"
        }}
      >
        Call My Lambda Function
      </button>

      <h2 style={{ marginTop: "30px" }}>{message}</h2>
    </div>
  )
