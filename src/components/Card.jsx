//importar styles de Card.module.css
import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => props.onClose(props.id)}>X</button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <div>{props.name}</div> 
      </Link>
      <div>{props.species}</div>
      <div>{props.gender}</div>
      <div>{props.status}</div>
      <div>{props.origin}</div>
      <div>
        <img alt={props.image} src={props.image} />
      </div>
    </div>
  );
}
