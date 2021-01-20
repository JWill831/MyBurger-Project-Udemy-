import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NaviationItems/NavigationItems';
import classes from '../SideDraw/SideDrawer.module.css';

const SideDrawer = (props) => {


    return (
        <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default SideDrawer;
