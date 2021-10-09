  import React, { useState } from'react';
  import { useHistory} from 'react-router-dom';
  import '../styles.css'
  import { withStyles, makeStyles } from "@material-ui/core/styles";
  import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core';
  import {  createTheme } from '@material-ui/core/styles';
  import celebration from '../assets/celebration.jpg'
  import {useForm} from '../hooks/form-hook';
  import api from '../api/index';
  import Input from '../components/Input';
  import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../util/validators';

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Dancing Script',
        'cursive',
      ].join(','),
    },});
  
  const  Contact =()=> {
      const classes = useStyles();

      const [formState, inputHandler, setFormData] = useForm({
        email: {
          value:'',
          isValid:false
        },
        message:{
          value:'',
          isValid: false
        },
        fullName: {
          value:'',
          isValid: false
        },
        phoneNumber:{
          value:'',
          isValid: false
        },
        subject:{
          value:'',
          isValid: false
        }
      }, false);

      const history = useHistory();

      const [showSuccessMessage, setShowSuccessMessage] = useState(false);
      const [showFailureMessage, setShowFailureMessage] = useState(false);

    const formSubmitHandler = async event =>{
      event.preventDefault();
      try{
      // var formData = new FormData();
      //  formData.append('email', formState.inputs.email.value);
      //  formData.append('message', formState.inputs.message.value);
      //  formData.append('fullName', formState.inputs.fullName.value);
      //  formData.append('phoneNumber', formState.inputs.phoneNumber.value);
      //  formData.append('subject', formState.inputs.subject.value);

      var payload ={email: formState.inputs.email.value, message: formState.inputs.message.value,
                       fullName:formState.inputs.fullName.value,subject:formState.inputs.subject.value,
                       phoneNumber:formState.inputs.phoneNumber.value};
      console.log("values:",payload)

       await api.sendEmail(payload)
       .then(response =>{
         // window.alert("Success", response);
         // console.log("values:",formData);
          setShowSuccessMessage(true);
          setShowFailureMessage(false);

         }).then(history.push('/')
         )}catch(error){
           console.log(error);
           setShowSuccessMessage(false);
           setShowFailureMessage(true);
         };
    
       };
         return (
             <div className={classes.container}>
                <br />
                <br />
               <div className={classes.title}>
                   Nora Bird Events
               </div>
               <div className={classes.subTitle}>
                 Book now for your 2022 New Year Celebration!
               </div>
               <div>
               <Card style={{maxWidth:450, margin: "0 auto", padding: "20px 5px"}}>
                   <CardContent>
                     <Typography gutterBottom variant="h5">
                      Contact Us
                     </Typography>
                     <Typography gutterBottom color="textSecondary" variant="body2" component="p" >
                       Please fill out the form and we will get back to you.
                     </Typography>
                      <form onSubmit={formSubmitHandler}>
                      <Grid container spacing={1}>
                           {/* <Grid xs={12} sm={6} item>
                              <TextField id="fullName" onChange={inputHandler} label="Full Name" placeholder="Enter Your Name" variant="outlined" fullWidth required/>
                             </Grid>*/}
                          <Grid xs={12} sm={6} item>
                              <Input element="input" type="text" id="fullName" onInput={inputHandler}  placeholder="Enter Your Name" variant="outlined"  
                                fullWidth required/>
                           </Grid>
                           <Grid xs={12} sm={6} item>
                              <Input element="input" type="text"   id="subject" onInput={inputHandler}  placeholder="Subject" variant="outlined" fullWidth required />
                           </Grid>
                           <Grid xs={12}  item>
                              <Input element="input" type="text"  id="email" onInput={inputHandler} type="email" placeholder="Enter Email" variant="outlined" fullWidth required/>
                           </Grid>
                           <Grid xs={12}  item>
                              <Input id="phoneNumber" type="text"  element="input" onInput={inputHandler} placeholder="Enter Phone Number" variant="outlined" fullWidth />
                           </Grid>
                           <Grid xs={12}  item>
                              <Input element="input" type="text"  id="message" onInput={inputHandler} placeholder="Type your message here" multiline rows={4} variant="outlined" fullWidth required/>
                           </Grid>
                           <Grid xs={12} item>
                             <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                           </Grid>
                      </Grid>
                      <div >
                     {showSuccessMessage && (
                         <p className="text-green-500 font-semibold text-sm my-2">
                               Thank You! Your Message has been delivered.
                           </p>
                      )}
                    {showFailureMessage && (
                      <p className="text-red-500">
                            Oops! Something went wrong, please try again.
                      </p>
                     )}
                   </div>
                      </form> 
                    
                   </CardContent>
                   
                 </Card> 
               </div>
               <br />
               
                </div>
  
         );
     };
  
  export default Contact;
  const useStyles = makeStyles({
      footerText: {
        color: "#FF69B4"
      },
      container: {
        textAlign: "center",
        height:"100%",
        backgroundImage:`url(${celebration})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat'
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
  
  
  
  

