import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styled from './Nav.module.css';
import logout from '../../assets/cerrar.png';
import random from '../../assets/random.png';

export default function Nav(props) {

    return(      
         
        <div className={styled.container}>          
            <h1 className={styled.h1}>
           Hi {props.user ? props.user : props.name}!
            </h1>   
                  
            <Link to='home' className={styled.about}>Home</Link>                       
            <Link to='about' className={styled.about}>About</Link> 
            <Link to='favorites' className={styled.about}>Favorites</Link>            
        
            <Link to="allPers" className={styled.about}>All Characters</Link>
        
            <button className={styled.random} onClick={() => props.getRandomCharacter()}>
             Random <img src={random} alt="Random" />
            </button> 
            <SearchBar onSearch={props.onSearch} />   
            <Link to='/' >
               <img className={styled.salir} src={logout} alt="logout" />
            </Link>       
                
            
    </div>
    )
}


// import logo from '../assets/logotipo.png';

// .logo {
//     position: relative;
//     top:80px;
//     left: 40%;
  
//   }
//   .logo img {
//     animation: titleAnimation infinite ease-in-out 3s;
//     width: 300px;
//   }
  
//   @keyframes titleAnimation {
//     0% {
//       transform: scale(1) rotateZ(0deg);
//       filter: drop-shadow(0 0 0 rgba(61, 4, 0, 255)) brightness(1);
//     }
//     50% {
//       transform: scale(1.2) rotateZ(3deg);
//       filter: drop-shadow(16px 16px 20px rgb(61 255 215)) brightness(1.4);
//     }
//     100% {
//       transform: scale(1) rotateZ(0deg);
//       filter: drop-shadow(0 0 0 #005f95) brightness(1);
//     }
//   }
