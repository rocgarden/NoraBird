import React from "react";
import { makeStyles } from "@material-ui/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ul style={{ color: "black", fontSize: "50px", margin: "0px" }}>
        <InstagramIcon />

        <FacebookIcon />
      </ul>
      <p>Copyright ©NoraBird 2021.</p>
    </div>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: "center",
      fontSize: "20px",
      color: "#FFFFFF",
      opacity: 1, // Leave this as 1
      backgroundColor: "rgba(0,0,0,0.2)"    }
  }));
