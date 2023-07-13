"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [tick, setTick] = useState(0);
  const [messages, setMessages] = useState<{ message: string }[]>([]);
  const [inputValue, setInputValue] = useState("");

  setTimeout(() => {
    setTick(tick + 1);
  }, 2000);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("api/getpost");
        if (response != null) {
          setMessages(response.data.result.rows);
        }
      } catch (error) {
        console.log("error");
      }
    };
    fetchMessages();
  }, [tick]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = {
      content: inputValue,
    };
    setInputValue("");
    try {
      await axios.post("api/sendpost", data);
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
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          flexDirection: "column",
        }}
        id="hihiheha"
      >
        {messages.map((messageObj, idx) => {
          return <div key={idx}>{messageObj?.message}</div>;
        })}
      </div>
    </div>
  );
}
