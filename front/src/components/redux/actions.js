import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, GET_CHARACTER } from "./action_types"
import axios from "axios";

export function addFavorites(char) {
    return function (dispatch){
        axios
        .post("http://localhost:3001/rickandmorty/favs", char)
        .then((response) => {
            return dispatch ({
                type: ADD_FAVORITES,
                payload: response.data,
            });
        });
    };   
}

export function deleteFavorites(id) {
    return function (dispatch) {
        axios
            .delete(`http://localhost:3001/rickandmorty/favs/${id}`)
            .then((response) => {
                return dispatch ({
                    type: DELETE_FAVORITES,
                    payload: response.data,
            });
        });
    };
}
 
export function characterFilter(gender) {
    return {
        type: FILTER,
        payload: gender}
}

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order,
    }
}

export function getCharacter(pageNum) {
    return function (dispatch) {
      fetch(`https://rickandmortyapi.com/api/character?page=${pageNum}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({
             type: GET_CHARACTER,
             payload: data });
        });
    };
  };
  