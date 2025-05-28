import axios from "axios";
import { useEffect, useState } from "react";
export default function Main() {
  const [actors, setActors] = useState([]);

  const fetchActors = (url = "https://lanciweb.github.io/demo/api/actors/") => {
    axios.get(url).then((res) => {
      const results = res.data;
      setActors(results);
    });
  };
  useEffect(() => fetchActors(), []);
  return <main>{/* <h1>{actors.map((actor) => actor.name)}</h1> */}</main>;
}
