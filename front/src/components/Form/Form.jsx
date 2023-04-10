import React from "react";
import styles from "./Form.module.css";
import validation  from './validation';
import rmVideo from '../../assets/logueo.mp4';


export default function Form(props){

const [userData, setUserData] = React.useState({username:'', password:''});
const [errors, setErrors] = React.useState({username:'', password:''});


function handleInputChange(e){
    setUserData({...userData,[e.target.name]: e.target.value});
    setErrors(validation((
            {...userData,[e.target.name]: e.target.value}))
        )

}

function handleSubmit(e){
  e.preventDefault();
  props.login(userData);
}

return (    
          <div className={styles.container} >  
          <div className={styles.loggin} >
            <form  onSubmit={handleSubmit}>
          
                <div>                  
                  <h3>Login Here</h3>
                  <label className={styles.users} htmlFor = "username">Username:</label>
                  <input  id="username" name="username" placeholder="Enter the user..." type="text" 
                    value={userData.username} onChange={handleInputChange}/>
                  <p className={styles.error}>{errors.username}</p>
                </div>

                <div>
                  <label className={styles.users} htmlFor = "password">Password:</label>
                  <input  id="password" name="password" placeholder="Enter password..." type="password" value={userData.password}
                    onChange={handleInputChange}/>
                  <p className={styles.error}>{errors.password}</p>
                </div>                
                  <button className={styles.Btn} type="submit">Login</button>    
                            
            </form>
            <div className={styles.logo}>
            <img  src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
            alt="logo"
          /> </div>    
            <video src={rmVideo} autoplay="true" muted="true" loop="true" type="video/mp4"/>
        </div>
        </div>        
    );
}



