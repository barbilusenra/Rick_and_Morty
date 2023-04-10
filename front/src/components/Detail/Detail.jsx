import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';
import { useNavigate } from "react-router-dom";

export default function Detail () {
    const { detailId } = useParams()
    const [character, setCharacter] = useState('');   
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    return(     
         <div className={styles.container}>
         <button onClick={()=> navigate('/home')}>Back</button>
         <div className={styles.name}>
            <h1>{character.name}</h1>
         </div>           
         <img className={styles.imagen} src={character.image} alt={character.name} />              
         <div className={styles.info}>       
            <h2>{'Status: '}{character.status}</h2>
            <h2>{'Specie: '}{character.species}</h2>
            <h2>{'Gender: '}{character.gender}</h2>
            <h2>{'Origin: '}{character.origin?.name}</h2> 
            </div>  
            {/* ? ---> si está mostrame, sino no te preocupes */}
           
            
        </div>        
    )
}
