import styles from './Favorites.module.css';
import { connect } from 'react-redux'
import Cards from '../Cards/Cards';
import { useDispatch } from 'react-redux';
import { characterFilter, orderCards } from '../redux/actions';

export function Favorites({ myFavorites }) {
    const dispatch = useDispatch();

    function handleFilter(e) {
        dispatch(characterFilter(e.target.value))
    }
    return (
        <>
            <select className={styles.selects}
                    name='ORDER'
                    id=''
                    onChange={e => dispatch(orderCards(e.target.value))}>
                <option value='' disabled>Select...</option>
                <option value='Ascendente'>Ascendente</option>
                <option value='Descendente'>Descendente</option>
            </select>
            <select className={styles.selects}
            name='FILTER' 
            id='' 
            onChange={handleFilter}>
                <option value='' disabled>Select...</option>
                <option value='All'>All</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='Unknown'>Unknown</option>
            </select>
            <div className={styles.container}>
                <Cards characters={myFavorites}
                />
            </div>
        </>
    );
}


export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites

    }
}

export default connect(mapStateToProps, null)(Favorites)