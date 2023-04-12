//importar styles de Card.module.css
import { Link } from "react-router-dom";
import "../styles/form.css";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function Card({id, name, species, gender, status, origin, image, onClose, removeFav, addFav, myFavorites}) {

  const [isFav, setIsFav] = useState(false);
  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({id,name, species, gender, origin, image, onClose});
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

// console.log(myFavorites)  
  return (
    <div className="card">

      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button className="btCierre" onClick={() => onClose(id)}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
      </Link>
      <h4>{species}</h4>
      <h4>{gender}</h4>
      <h4>{status}</h4> 
      <h4>{origin}</h4>
      <div>
        <img alt={image} src={image} />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};
const mapStateToProps =(state)=> {
  return {
    myFavorites: state.myFavorites
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(Card);
