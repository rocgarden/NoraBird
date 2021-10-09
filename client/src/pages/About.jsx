import React from'react';
import '../styles.css'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Grid, TextField, Button, CardMedia } from '@material-ui/core';
import nora from '../assets/nora.jpg'
import celebration from '../assets/celebration.jpg'

export default function About() {
    const classes = useStyles();
       return (
        <div> 
        <div className={classes.topContainer}>
          <br />
            <h1>About Us</h1>
            <br />
            <p>I started this company with the idea to provide <br />support for all your corporate event needs. <br />I believe in providing personalized service to meets any of your events needs.</p>
            <br />
        </div>
        <div>       
        <div className={classes.cardHeaderDiv}>
          <p><strong>Meet your next Event Planning team</strong></p>
        </div>
        <div className={classes.cardDiv}>
        {/* <Card className={classes.cardStyle} >
        <CardMedia
          component="img"
          height="140"
          image={nora}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
       </Card> */}
       <Card className={classes.cardStyle}>
        <CardMedia
          component="img"
          height="140"
          image={nora}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nora Garcia
          </Typography>
          <Typography variant="body2" color="text.secondary">
           My Name is Nora. I am an event specialist focused on providing services catering to large events. I am 
           dedicated to helping you plan all your event needs, from venue selections to catering and bar services. 

          </Typography>
        </CardContent>
       </Card>
       </div>
        </div>
        </div>
       );
   };


   const useStyles = makeStyles({
    cardStyle: {
      maxWidth: 345 ,
      margin:8
    },
    topContainer: {
      padding:'55px',
      textAlign: "center",
      height:"100%",
      backgroundImage:`url(${celebration})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      fontSize:25,
      color:'#ffffff'
    },
    cardDiv:{
      display:"flex",
      margin:'20px',
      justifyContent:"center"
      
    },
    cardHeaderDiv:{
      display:"flex", 
      justifyContent:"center",
      fontSize:35
      
    },
    contentCard: {
      //  padding: "10px",
      //  width: "100",
        margin: "16px",
        textAlign: "center",
        marginBottom: "25px", 
        backgroundColor: "#fff",
        justifyItems:"center",
        height:"100"
      },
      title: {
        color: "#fff",
        fontSize: "4.5rem",
        fontFamily: "Dancing Script",
        paddingTop:"50px"
      },
      subTitle:{
        color: "#fff",
        fontSize: "2.5rem",
        fontFamily: "Dancing Script",
        padding:"50px"
      }
    
  });





