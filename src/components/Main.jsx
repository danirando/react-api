import axios from "axios";
import { useEffect, useState } from "react";
import ActorsCard from "./ui/ActorsCard";
import ActressCard from "./ui/ActressCard";
export default function Main() {
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);
  const [name, SetName] = useState("");

  // Per ogni attore nell'array 'actors', controllo se il suo nome contiene la parola cercata nell'input
  // Converte entrambi in minuscolo per non fare distinzione tra maiuscole e minuscole
  // Se sì, lo include nell'array filtrato 'filteredActors'
  // Stessa cosa per l'array 'actresses'
  const filteredActors = actors.filter((actor) =>
    actor.name.toLowerCase().includes(name.toLowerCase())
  );

  const filteredActresses = actresses.filter((actress) =>
    actress.name.toLowerCase().includes(name.toLowerCase())
  );

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
        <input
          className="form-control"
          type="text"
          value={name}
          placeholder="Cerca..."
          name="filter"
          id="search"
          onChange={(e) => SetName(e.target.value)}
        />
        <h1>Actors Cards</h1>
        <div className="row g-3">
          <ActorsCard actors={filteredActors} />
          <h1>Actresses Cards</h1>
          <ActressCard actresses={filteredActresses} />
        </div>
      </div>
    </main>
  );
}
