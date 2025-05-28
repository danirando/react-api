export default function ActressCard({ actresses }) {
  return actresses.map((actress) => (
    <div className="col-4" key={actress.id}>
      <div className="card h-100">
        <img src={actress.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{actress.name}</h5>
          <p className="card-text">{actress.biography}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Anno di nascita: {actress.birth_year}
          </li>
          <li className="list-group-item">
            Nazionalita: {actress.nationality}
          </li>
          <li className="list-group-item">
            Riconoscimenti:{" "}
            {Array.isArray(actress.awards)
              ? actress.awards.join(", ")
              : actress.awards || "Nessun riconoscimento"}
          </li>
        </ul>
      </div>
    </div>
  ));
}
