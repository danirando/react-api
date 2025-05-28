export default function Card({ actors }) {
  return actors.map((actor) => (
    <div className="col-4" key={actor.id}>
      <div className="card h-100">
        <img src={actor.image} className="card-img-top h-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{actor.name}</h5>
          <p className="card-text">{actor.biography}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Anno di nascita: {actor.birth_year}
          </li>
          <li className="list-group-item">Nazionalita: {actor.nationality}</li>
          <li className="list-group-item">
            Riconoscimenti: {actor.awards.join(", ")}
          </li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  ));
}
