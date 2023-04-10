  import React from 'react';
  import styles from '../About/About.module.css';
  import mifoto from '../../assets/barbis.jpg';

  export default function About() {   
      return (  
           <div className={styles.container}>       
            <h1 className={styles.bienvenida}>Bienvenidos a mi API de Rick and Morty!</h1>   
            <div className={styles.front}>
            <h2 className={styles.data}>Bárbara L. Senra</h2>
            <img className={styles.image} src={mifoto} alt="Personaje de R&M" />
                       
        </div>
        <div className={styles.back}>
            <div className={styles.datos}>
            <h2 className={styles.dataa}>Creadora de esta app</h2>
            <h2>{'Specie: '} Human</h2>
            <h2>{'Gender: '} Female</h2>
            <h2>{'Cohorte: '} Ft-36a</h2>
            <h2>{'Status: '} Alive</h2>
            
        </div>
             </div>
       
        </div>
             
         );
     }


  

