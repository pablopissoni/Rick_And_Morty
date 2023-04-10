//importar styles de Card.module.css
import { Link } from "react-router-dom";
import "../styles/form.css"

export default function Card(props) {
  return (
    <div className="card">
      <div>
        <button className="btCierre" onClick={() => props.onClose(props.id)}>X</button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <h3>{props.name}</h3> 
      </Link>
      <h4>{props.species}</h4>
      <h4>{props.gender}</h4>
      <h4>{props.status}</h4>
      <h4>{props.origin}</h4>
      <div>
        <img alt={props.image} src={props.image} />
      </div>
    </div>
  );
}
