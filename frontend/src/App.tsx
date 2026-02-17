import { Button } from "antd";
import { useEffect, useRef, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({ name: "", email: "" });
  const number = useRef(20);

  useEffect(() => {
    async function getResponse() {
      try {
        console.log("start");
        const response = await fetch(import.meta.env.VITE_API_URL, {
          method: "GET",
        });

        const message = await response.json();
        setMessage(message.message);
      } catch (error) {
        console.log(error);
      }
    }

    getResponse();
  }, []);

  async function createUser() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Alex",
          email: `email${number.current}@mail.com`,
        }),
      });

      number.current += 1;
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="w-screen h-screen bg-amber-600">
        <p>{message}</p>
        <div className="flex gap-4">
          <Button onClick={createUser}>Add user</Button>
          <Button>Show user</Button>
          <Button>Delete user</Button>
        </div>
        <div>
          <h2>Last Created User</h2>
          <div>
            <span>{user.name}</span>
            <span>{user.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
