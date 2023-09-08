import React from "react";
import classes from "./Card.module.css";

const Card = () => {
  return (
    <>
    <div className = {classes.body}>
      <div className={classes.card}>
        <p className= {classes.Spotify}>Spotify</p>
        <img className={classes['spotify-icon']} src="/Spotify_icon.svg" alt="Spotify icon" />
      </div>
      <form className = {classes.form}>
        <input className = {classes.Email} type="text"  placeholder="Email"/>
        <input className = {classes.Password} type="text" placeholder="Password" />
    
      </form>
      <div className = {classes.Signin}>
      <input className={classes.Signinclick} type="text" placeholder = "SIGN IN"/>
      </div>
    </div>
    </>
  );
};

export default Card;
