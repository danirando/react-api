import axios from "axios";
import { useEffect, useState } from "react";
import ActorsCard from "./ui/ActorsCard";
import ActressCard from "./ui/ActressCard";
export default function Main() {
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);

  const fetchActress = (
    url = "https://lanciweb.github.io/demo/api/actresses/"
  ) => {
    axios.get(url).then((res) => {
      const results = res.data;
      setActresses(results);
    });
  };

  const fetchActors = (url = "https://lanciweb.github.io/demo/api/actors/") => {
    axios.get(url).then((res) => {
      const results = res.data;
      setActors(results);
    });
  };
  useEffect(() => fetchActress(), []);
  useEffect(() => fetchActors(), []);
  return (
    <main>
      <div className="container">
        <h1>Actors Cards</h1>
        <div className="row g-3">
          <ActorsCard actors={actors} />
          <h1>Actresses Cards</h1>
          <ActressCard actresses={actresses} />
        </div>
      </div>
    </main>
  );
}
