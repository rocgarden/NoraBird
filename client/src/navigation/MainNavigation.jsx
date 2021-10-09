import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import NavLinks from './NavLinks'
import Header from './Header';
import { useScrollTrigger } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

const MainNavigation = props => {

   
    return (
        <React.Fragment>
            <nav>
               <Header/>

                <Home />
                {/* <NavLinks /> */}
            </nav>
        </React.Fragment>
    );
}

export default MainNavigation;