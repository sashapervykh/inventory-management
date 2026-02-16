import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

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

  return (
    <>
      <div className="w-screen h-screen bg-amber-600">{message}</div>
    </>
  );
}

export default App;
