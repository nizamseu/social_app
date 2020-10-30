import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import './header.css'
const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className="typographyStyle">
                   NUB Nizam Uddin Babu
                </Typography>
                <AcUnitRoundedIcon/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;