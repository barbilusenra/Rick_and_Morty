import style from "./landing.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Landing = (props) => {
  const [name, setName] = useState("");

  const validate = () => {
    if(!name) {
     alert('Please, enter your name/nickname to enter as a guest');
  }
  }

  const handleLoginAsGuest = () => {
    if(name) {
      props.loginAsGuest(name);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.loggin}>
        <label>
          <span>LOGIN AS GUEST</span>
        </label>
        <input
          type="text"
          placeholder="Enter your name/nickname..."
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="30"
        />
        <Link to={name ? "/home" : ""}>
        <button onClick={() => {
           validate();
           handleLoginAsGuest();
        }}>Login</button>
        </Link>
        
      </div>
    </div>
  );
};
export default Landing;
