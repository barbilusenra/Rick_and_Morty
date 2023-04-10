import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getCharacter } from "../redux/actions";
import { useState } from "react";
import styles from "../Cards/Cards.module.css";
import style from '../AllPers/AllPers.module.css';


const AllPers = (props) => {
  //Traemos nuestros personajes del estado global
  const AllPersCards = useSelector((state) => state.AllPersCards);

  //Inicializamos dispatch
  const dispatch = useDispatch();

  //Estado local de paginacion API, cada pagina trae 20 pjs de la API
  // No confundir con contador de paginas COMPONENTE
  const [currentPage, setCurrentPage] = useState(1);

  //ESTADO contador de paginas COMPONENTE
  //suma o resta cuando haces click a siguiente o prev
  const [contador, Setcontador] = useState(1);

  //Para actualizar los datos del estado paginacion API
  useEffect(() => {
    dispatch(getCharacter(currentPage));
  }, [currentPage, dispatch]);

  // 20 cartas por pagina
  // solo mostramos 8
  const [cardsToShow, setCardsToShow] = useState({ start: 0, end: 8 });

  let currentPageCards = AllPersCards.slice(
    cardsToShow.start,
    cardsToShow.end,
  );
  //HACEMOS CLICK EN SIGUIENTE
  const handleNext = (event) => {
    //Si no llegamos al final de la PAGINA API
    if (cardsToShow.end < 20) {
      //MOSTRAMOS 8 CARTAS MAS EN NUESTRO COMPONENTE
      setCardsToShow({
        start: cardsToShow.start + 8,
        end: cardsToShow.end + 8,
      });

      //ACTUALIZAMOS EL CONTADOR DE PAGINAS COMPONENTE
      Setcontador(contador + 1);
    } else {
      //Si llegamos al final de la pagina API
      // AVANZAMOS DE PAGINA API
      setCurrentPage(currentPage + 1);
      //Reseteamos nuestra pagina componente
      setCardsToShow({ start: 0, end: 8 });
      //ACTUALIZAMOS EL CONTADOR DE PAGINAS COMPONENTE
      Setcontador(contador + 1);
    }
  };

  //HACEMOS CLICK EN ATRÁS
  const handleBack = () => {
    if (contador <= 1) {
      return;
    }
    if (cardsToShow.start > 0) {
      setCardsToShow({
        start: cardsToShow.start - 8,
        end: cardsToShow.end - 8,
      });
      Setcontador(contador - 1);
    } else {
      setCurrentPage(currentPage - 1);
      setCardsToShow({ start: 15, end: 20 });
      Setcontador(contador - 1);
    }
  };

  return (
    <>    
        <div className={styles.container}>
        {currentPageCards?.map((character, index) => {
          return (
            <Card
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              id={character.id}
              onClose={props.onClose}
              key={index}
            />
          );
        })} 
        </div>
        <button onClick={handleBack} className={style.PaginationBtn}>
          Atrás
        </button>
        <button className={style.PaginationNumBtn}>{contador}</button>
        <button onClick={handleNext} className={style.PaginationBtn}>
          Siguiente
        </button>
  
    </>
  );
};

export default AllPers;
