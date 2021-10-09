import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {Collapse, IconButton} from '@material-ui/core';


export default function ImageCard({item, checked}){
    const classes = useStyles();

    return(
         <Collapse in={checked} {...checked ? {timeout: 1000 } : {}}>
          <Card className={classes.root}>
              <CardMedia 
                className={classes.media}
                image={item.imageUrl} 
                title="New Items"
                />
                    <CardContent>
                        <Typography 
                         gutterBottom
                         variant="h5"
                         component="h1"
                         className={classes.title} >
                             {item.title}
                        </Typography>

                        <Typography
                         variant="body2"
                         color="textSecondary"
                         component="p"
                         className={classes.desc}>
                              {item.description}
                        </Typography>
                    </CardContent>
          </Card>
         </Collapse>
    );
}; 



const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: "rgba(0,0,0,0.2)",
        margin: "20px",
        marginTop:"50px",
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

    },
    media: {
        height: 440
    },
    title: {
        fontFamily: "Dancing Script",
        fontWeight: "bold",
        fontSize: "2rem",
        color: "#ffffff"
    },
    desc: {
        fontFamily: "Roboto",
        fontSize: "1.1rem",
        color: "#fff"
    }
});
