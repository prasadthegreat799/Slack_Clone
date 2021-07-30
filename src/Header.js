import React from 'react'
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from './StateProvider';

function Header() {

    const [{user}] =useStateValue();

    return (
        <div className="header">


            <div className="header_left">
            
                <Avatar  className="header__avatar"
                
                alt={user?.displayName}
                src={user?.photoURL}
                />
               
               
            </div>

            <div className="header_search">
            

                <SearchIcon />
                <input  placeholder="Search Here..."/>
            
            
        
            </div>


            <div className="header_right">
                
                <HelpOutlineIcon/>

            </div>
            
        </div>
    )
}

export default Header
