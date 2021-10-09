import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from 'react-router-dom';
import place from '../static/place';
import ImageCard from '../components/ImageCard';
import useWindowPosition from '../hooks/useWindowPosition';
import Grid from '@material-ui/core/Grid';


export default function PromotionItem () {
    const classes = useStyles();
    const checked = useWindowPosition("header");
   // const [items, setItems] = useState();

   // const { isLoading, error, sendRequest, clearError} = useHttpClient();
   // const userId = useParams().userId;
   
    
    return (
        <div className={classes.root} id="event-Places">
        
         <ImageCard item={place[0]} checked={checked} />
         <ImageCard item={place[1]} checked={checked}/>


            {/* {items &&
                <ItemList 
                   item={items}  
                   onDelete={onDeleteHandler}
                />
            } */}
            
             
        </div>
    );



}


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column"
      }
    },
    gridLabel: {
      justifyContent: "center",
      fontSize: "4.5rem",
      fontFamily: "Dancing Script"
  },
  }));