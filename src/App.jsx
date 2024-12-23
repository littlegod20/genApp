import { useEffect, useState } from "react";
import "./App.css";
import { handleApiCalls } from "./utils/helpers";

function App() {
  const [data, setData] = useState([]);
  const endpoints = [
    "http://localhost:5000/api/tickets/read-tickets",
    "http://localhost:5000/api/tickets/book-tickets",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await handleApiCalls(endpoints);
        const jsonData = await Promise.all(responses.map((res) => res.json()));

        setData(jsonData.map((item) => item.db.name));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        {data && data.length > 0 ? (
          data.map((item, index) => <div key={index}>{item}</div>)
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
}

export default App;
