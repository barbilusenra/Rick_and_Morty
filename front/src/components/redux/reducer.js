import { ADD_FAVORITES, FILTER, DELETE_FAVORITES, ORDER, GET_CHARACTER } from './action_types'


const initialState = {
    myFavorites: [],
    allCharacters: [],
    AllPersCards: []
}

export default function rootReducer(state = initialState, { type, payload }) {
    /*let array = [];*/
    switch (type) {
        case ADD_FAVORITES:
            /* array = [...state.myFavorites]
             array.push(payload)
             return {
                 ...state,
                 myFavorites: array
             }*/
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,                
            };

        case DELETE_FAVORITES:
            // const filtered = state.myFavorites.filter((fav) => fav.id !== payload)
            return {
                ...state,
                myFavorites: payload,
            };

        case FILTER:
            const charactersCopy = [...state.allCharacters];
            const filteredCharacters =
                payload === 'All' ? charactersCopy : charactersCopy.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case ORDER:
            const orderCopy = [...state.allCharacters];
                if (payload === 'Ascendente') {
                    orderCopy.sort((a, b) => a.id - b.id)
                }
                else {
                    orderCopy.sort((a, b) => b.id - a.id)
                }
                return {
                    ...state,
                    myFavorites: orderCopy
                };
            
            case GET_CHARACTER:
                    // for (const char of state.allCharacters) {
                    //   if (char.id === payload.id) {
                    //     return state;
                    //   }
                    // }
                const [addCharacters] = [payload.results];
                return {
                    ...state,
                    AllPersCards: addCharacters,
                    };
                
        default:
            return state;
    }
}
