import React, {Component, useEffect, useState} from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {CardMedia, Collapse, IconButton, requirePropFactory} from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import EventPlaces from '../pages/eventPlaces';
import Header from '../navigation/Header';
import image1  from '../assets/venue1.jpg';
import image2 from '../assets/venue_2.jpg';
import image3 from '../assets/venue_3.jpg'
import place from '../static/EventVenue';
import CarouselComponent  from '../components/Carousel';
import '../styles.css'

export default function Home(props){
    const classes = useStyles(props);
    const [checked, setChecked] = useState(false);
   
    useEffect(()=>{
        setChecked(true);
       }, []);
    return(
        <div >
        <div className="firstDiv">
          <div>
            <Header/>
          </div>
  
          <div>
            
            <Collapse in={checked} {...(checked ? {timeout: 1000} : {})} collapsedSize={50}>
                    <div className={classes.container}>
                    <div>
                     <h1 className={classes.title}>
                          Nora <span className={classes.colorText}>Bird</span><br />
                          Events
                     </h1>
                     </div>

                     <div>
                         <Scroll to="event-Places" smooth={true}>
                          <IconButton>
                           <ExpandMoreIcon className={classes.goDown} />
                            </IconButton>
                         </Scroll>
                     </div>
                     <div className={classes.welcomeDiv}>
                       <p>Welcome to Nora Bird Events. Call now to get started on your next event planning. </p>
                     </div>  
                     </div>
             </Collapse>
             </div>
             </div>
           
         
             <div className="imageCardDiv">
               <EventPlaces />
             </div>
             <div  className={classes.gridDiv}>
               <CarouselComponent />
             </div>


                <div className={classes.gridDiv}>
                <Grid container direction="row" className={classes.gridLabel}> 
                      <h1 className={classes.gridTitle}>Venue Services</h1>
                </Grid>
                <div>

                </div>
                
                <Grid className={classes.homeGrid} container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <Grid container justifyContent="center" alignItems="center" item xs={3}>
                      <img className={classes.imageDisp} alt="" src={image1} />
                      <p className={classes.paragraphTitle}> <strong> {place[0].title} </strong></p>   
                      <p className={classes.paragraphText}> {place[0].description}</p>   
                 </Grid>
                 <Grid container justifyContent="center" alignItems="center" item xs={3}>
                      <img className={classes.imageDisp} alt="" src={image2} />
                      <p className={classes.paragraphTitle}> <strong> {place[1].title} </strong></p>   
                      <p className={classes.paragraphText}> {place[1].description}</p>   
                  </Grid>
                  <Grid container justifyContent="center" alignItems="center"  item xs={3}>
                      <img className={classes.imageDisp}    alt="" src={image3} />
                      <p className={classes.paragraphTitle}> <strong> {place[2].title} </strong></p>   
                      <p className={classes.paragraphText}> {place[2].description}</p>   
                  </Grid>

                  </Grid>
                  </div>

        </div>
    ) 
}

const useStyles = makeStyles((theme) => ({
    homeGrid: {
      flexGrow: 1,
      justifyContent: "center",
      paddingBottom: 25,
      paddingTop: 20,
      alignItems: "center",
      color: "#78756b",
     // backgroundColor: "rgb(220,220,220, 0.8) ",
     // flexWrap:"wrap",
     // display:"flex"

    },
    carouselDiv:{
     // height:"50px"
    },
    gridDiv:{
      minHeight: "100vh",
    //  display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column"
      }
   //   backgroundColor:"rgb(231, 233, 235)",
    },
    gridTitle: {
        color: "#78756b",
        fontSize: "4.5rem",
        fontFamily: "Dancing Script"
    },
    gridLabel: {
        justifyContent: "center",
        fontSize: "4.5rem",
        fontFamily: "Dancing Script"
    },
    imageDisp:{
      border: "1px",
      padding:5,
      borderRadius:'3px',
      width:'100%', height:'auto'
    },
    colorText: {
        color: "#78756b"
      },
      container: {
        textAlign: "center"
      },
      title: {
        color: "#fff",
        fontSize: "4.5rem",
        fontFamily: "Dancing Script"

      },
      goDown: {
        color: "#fff",
        fontSize: "4rem"
      },
      paragraphTitle:{
        justifyItems:"center",
      //  padding:"5px",
        fontSize:"25px",
        flexWrap:"wrap"
      },
      paragraphText:{
        fontSize:"15px"
      },
      welcomeDiv:{
        fontFamily: "Roboto",
        fontSize:"1.8rem",
        color:"#fff"
      }
}));