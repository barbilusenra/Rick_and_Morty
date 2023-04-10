import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorites, deleteFavorites } from "../redux/actions";

function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);   

   function handleFavorite(id) {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorites(id));
      }
      else{
         setIsFav(true);
         dispatch(addFavorites(props));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);

   return (
         
    <div className={styles.card}>
       <div className={styles.front}>
            <img className={styles.image} src={props.image} alt="Personaje de R&M" />
            <h2 className={styles.name}>{props.name}</h2>           
            </div>             
            <div className={styles.back}>
          
            <div className={styles.button2}>              
            <button onClick={props.onClose}>X</button>          
            </div>
            <div className={styles.datos}>
             <h2>{'Species: '}{props.species}</h2>
             <h2>{'Gender: '}{props.gender}</h2> 
             <h2>{'Id: '} {props.id}</h2>
            <Link to={'/Detail/' + props.id} className={styles.linkCard}>
               <div className={styles.cardName}>{'More info'}</div> 
            </Link >
               <div className={styles.button1}>            
            {
               isFav ? (
                
            <button  onClick={() => handleFavorite(props.id)}>❤️</button>
                ) : (
           <button onClick={() => handleFavorite(props.id)}>🤍</button>
               ) 
            }   
            </div>           
            </div>
            </div>
            </div>     
  );
}

export default Card;
/* </div>
        <h2>{'Species: '} {props.species}</h2>
        <h2>{'Gender: '}{props.gender}</h2>
        <h2>{'Id: '} {props.id}</h2>
        <h2>{'Status: '} {props.status}</h2>
        <Link to={`/detail/${props.id}`}>
           <div className={styles.cardName}>{'¿ More info ?'}</div>
        </Link>
     </div>
  </div>
  ); */

   //    <div className={styles.container}>
   //       <div className={styles.front}>
   //          <img className={styles.image} src={image} alt="Personaje de R&M" />
   //          <h2 className={styles.data}>{name}</h2>
   //       </div>
   //       <div className={styles.back}>
   //          <div className={styles.buttonContainer}>
               
   //              <button onClick={onClose}>X</button>
   //          </div>
          
   //          <h2>{species}</h2>
   //          <h2>{gender}</h2>         
   //       </div>
   //    </div>
   // );