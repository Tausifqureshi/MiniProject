import React from "react";
import { useAuth } from "../contexAPI/AuthProvider ";

export default function Home() {
  const { userName, setUserName } = useAuth();
  function handleChange() {
    setUserName(!userName)
  }

  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }

 
  return (
    <div>
      <h1> Home Page </h1>
      <h2>Welcome, {userName ? "Qureshi": "Tausif"}!</h2>
      <button onClick={handleChange}>Change your name</button>
    </div>
  );
}

// export default Home;
