import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./ui/Card";
export default function Main() {
  const [actors, setActors] = useState([]);

  const fetchActors = (url = "https://lanciweb.github.io/demo/api/actors/") => {
    axios.get(url).then((res) => {
      const results = res.data;
      setActors(results);
    });
  };
  useEffect(() => fetchActors(), []);
  return (
    <main>
      <div className="container">
        <h1>Actors Cards</h1>
        <div className="row g-3">
          <Card actors={actors} />
        </div>
      </div>
    </main>
  );
}
