
import React from 'react';
import classes from '../ToolBar/ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NaviationItems/NavigationItems';

const ToolBar = (props) => {
    return (
        <header className={classes.ToolBar}>
            <div>MENU</div>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default ToolBar;
