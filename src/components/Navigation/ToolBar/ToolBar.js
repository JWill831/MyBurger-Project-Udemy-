
import React from 'react';
import classes from '../ToolBar/ToolBar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NaviationItems/NavigationItems';
import DrawerToggle from '../SideDraw/DrawerToggle/DrawerToggle';


const ToolBar = (props) => {
    return (
        <header className={classes.ToolBar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default ToolBar;
