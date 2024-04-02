import { useEffect, useState } from "react";
import Box from "./components/Box";
import Navbar from "./components/Navbar";

const App = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [number]);

  const fetchData = () => {
    setLoading(true)
    fetch(`https://southparkquotes.onrender.com/v1/quotes/${number}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false)
      }).catch(() => {
        setLoading(false)
      })
  }
  return (
    <div>
      <Navbar setNumber={setNumber} />
      <Box loading={loading} data={data} />

    </div>
  );
};

export default App;
