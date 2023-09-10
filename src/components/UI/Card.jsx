import React, { useState , useEffect} from "react";
import classes from "./Card.module.css";

const Card = (props) => {

  const [enteredemail, setEnteredEmail] = useState('');
  const[enteredpassword,setEnteredPassword] = useState ('')
  const [formIsValid, setFormIsValid] = useState(false);
 
const formStyle = formIsValid ? {backgroundColor: 'black'} : {borderColor: 'red'};


  const SubmitHandler = (event)=>{
    event.preventDefault();
    if (enteredemail.includes('@') && enteredpassword.trim().length > 6) {
      // Set the form as valid by passing true as an argument
      setFormIsValid(true);
      props.setIsAuthenticated(true);

  
      // Perform the form submission or other actions here
    } else {
      // Set the form as invalid by passing false as an argument
      setFormIsValid(false);
  
      // Optionally, you can display an error message or take other actions for invalid input
    }


  }

  const EmailChangeHandler=(event) =>{
    setEnteredEmail(event.target.value);

  }
  const PasswordChangeHandler=(event) =>{
    setEnteredPassword(event.target.value);

  }

  console.log(enteredemail, enteredpassword);


useEffect(()=>{
  if(enteredemail.includes('@') || (enteredpassword.trim().length > 6)){
    setFormIsValid(true);

  }


},[enteredemail, enteredpassword])
console.log(formIsValid)
  return (
    <>

      <form onSubmit = {SubmitHandler}>
        <div className={classes.body}>
          <div className={classes.card}>
            <p className={classes.Spotify}>Spotify</p>
            <img
              className={classes["spotify-icon"]}
              src="/Spotify_icon.svg"
              alt="Spotify icon"
            />
          </div>
          <form className={classes.form}>
            <input
              className={classes.Email
              }
              style={formStyle}
              id="Email"
              type="text"
              placeholder="Email"
              name="email"
              value={enteredemail}
              onChange={EmailChangeHandler}
            />
            <input
              className={classes.Password}
              id="Password"
              type="text"
              placeholder="Password"
              name="Password"
              value={enteredpassword}
              onChange={PasswordChangeHandler}
            />
             {
            !formIsValid && <div
            style={{
              color:'red',
              
              
            }}
            >
              invalid format
            </div>
          }
          </form>
         

          <div className={classes.Signin}>
            <button type = 'submit' className={classes.Signinclick} >
              SIGN IN
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Card;
