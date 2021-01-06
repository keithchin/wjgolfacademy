import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

export default function Header() {
    const displayHeader = () => {
        return <Toolbar>WJGolfAcademy</Toolbar>;
    };

    return (
        <header>
            <AppBar>{ displayHeader() }</AppBar>
        </header>
    );
}

