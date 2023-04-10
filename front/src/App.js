import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import Landing from './components/Form/landing';
import AllPers from './components/AllPers/AllPers';

function App () {
 //Definimos el hook useDispatch para eliminar una carta de los fav
  // cuando se elimina desde el home
  const location = useLocation();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false); 
  const [characters, setCharacters] = useState([]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const username = 'baarbi.senra@gmail.com';
  const password = '123asd';
  const [name, setName] = useState("");

  const login = (userData) => {
   if (userData.username === username && userData.password === password){
    setAccess(true);
    setUser(userData.username);
    navigate('/Home');    
   }
  };

  const loginAsGuest = (name) => {
    if (name) {
    setAccess(true);
    navigate('/Home');
    setUser(name);
    }
  }

  useEffect (() => {
   if( !access && location.pathname !== '/'){
    navigate('/')
   }
  }, [access, location.pathname, navigate]);

//Funcion que busca y devuelve personajes de la API
    const onSearch = (character) => {
     fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
         for (let character of characters) {
          if(data.id === character.id){
            return window.alert('No se puede repetir el personaje')
            }
          }
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    }

  // const clouseUser = () => {
  //   setUser("");
  //   setCharacters([]);
  // };

  const onClose = (ID) => {
    setCharacters(characters.filter((character) => character.id !== ID));
  };

  const getRandomCharacter = () => {
    function random(){
    const randomId = Math.floor(Math.random() * 826);
    return randomId
    }
    return onSearch(random())
  }

  return (    
       <div className='App' style={{ padding: '10px' }}>
        {location.pathname === '/' ?
        <Form login={login}  /> : (
        <Nav onSearch={onSearch} getRandomCharacter={getRandomCharacter} user={user} name={name} setName={setName} />
        ) } 
               
        <Routes>
          <Route path='home' element={<Cards onClose={onClose} characters={characters}  />} />
          <Route path='about' element={<About />} />
          <Route path="allPers" element={<AllPers onClose={onClose} characters={characters} onSearch={onSearch} id={characters.id} />} />
          <Route path='detail/:detailId' element={<Detail />} />
          <Route path='favorites' element={<Favorites characters={characters} onClose={onClose} />} />
          <Route path='/' element={< Landing loginAsGuest={loginAsGuest} setMessage={setMessage} message={message} />} />
       </Routes>
        
      </div>           
   )
  }

export default App;
