"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [tick, setTick] = useState(0);
  const [messages, setMessages] = useState([""]);
  const [inputValue, setInputValue] = useState("");

  setTimeout(() => {
    setTick(tick + 1);
  }, 2000);

  useEffect(() => {
    const fetchMessages = async () => {
      console.log("test");
      const element = document.getElementById("hihiheha");
      if (element) {
        // element.innerHTML += "<p> test </p>";
      }
    };
    fetchMessages();
  }, [tick]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
    let data = {
      content: inputValue,
    };
    try {
      const response = await axios.post("api/sendpost", data);
      if (response != null) alert(response);
    } catch (error) {
      console.log("failed to save message!");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <center>
          <h1>Form</h1>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </center>
      </form>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        id="hihiheha"
      ></div>
    </div>
  );
}
