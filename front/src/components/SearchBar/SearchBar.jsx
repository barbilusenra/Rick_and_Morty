import styles from './SearchBar.module.css';
import { useState } from 'react';
import searchLogo from '../../assets/buscar.png';


export default function SearchBar(props) {
   const [character, setCharacter] = useState("");

   const handleChange = (event) => {
      setCharacter(event.target.value)

   }

   return (
      <div className={styles.containerSearch}>   
      <input type='search' name="search" id=""  onChange={handleChange} placeholder='Search by Id...' />
      <button onClick={()=>props.onSearch(character)}> <img src={searchLogo} alt="" /> </button>  
      </div>
   );
}


// const Container = styled.div`
// margin: 2em;
// color:rgb(118, 244, 248);
// font-family:'Dosis', sans-serif;
// `

// const Input = styled.input`
// border-radius: 10px 0px 0px 10px;
// border: none;
// background: rgb(159,171,191);
// background: linear-gradient(90deg, rgba(159,171,191,0.5382528011204482) 0%, rgba(37,72,103,0.7483368347338936) 58%, rgba(34,34,59,1) 100%);
// height:3em;
// color:rgb(27, 176, 187);
// font-family:'Dosis', sans-serif;
// `

// const Boton = styled.button`
// border-radius: 0px 10px 10px 0px;
// background: rgb(255,255,255);
// background: linear-gradient(90deg, rgba(255,255,255,0.5382528011204482) 0%, rgba(134,134,138,0.7483368347338936) 37%, rgba(80,81,108,1) 69%, rgba(61,65,125,1) 100%);
// border:none;
// width: 5em;
// height:3em;
// font-family:'Dosis', sans-serif;
// color:rgb(118, 244, 248);

// `
// // color:rgb(27, 176, 187);
// export default function SearchBar({onSearch}) {
//   // acá va tu código
//   const [searchInput,setSearchInput] = useState("");

//   const changeHandler = (event) => {
//     setSearchInput(event.target.value);
//   }

//   console.log(searchInput);

//   return (
//     <Container>
//       <Input type="text" name="search" id="search" placeholder="Enter your city..."
//       onChange={changeHandler} />
//       <Boton onClick={()=>onSearch(searchInput)} > Search</Boton>

//     </Container>
//   )
// };
