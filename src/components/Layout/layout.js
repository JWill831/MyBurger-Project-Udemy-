import Auxilliary from '../../hoc/Auxilliary';
import React, { useState } from 'react';
import classes from '../Layout/Layout.module.css';
import Toolbar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDraw/SideDrawer';



const Layout = (props) => {
    const [drawerState, setDrawerState] = useState({
        showSideDrawer: false
    });

    const sideDrawerClosedHandler = () => {
        setDrawerState((prevDrawerState)=>{
            return {showSideDrawer: !prevDrawerState.showSideDrawer}
        })
    };
    const sideDrawerToggleHandler=()=>{
        
        setDrawerState({showSideDrawer: !drawerState.showSideDrawer})
    }
    return (
        <Auxilliary>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer
                open={drawerState.showSideDrawer}
                closed={sideDrawerClosedHandler} />
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}> {props.children}</main>
        </Auxilliary>


    );
};

export default Layout;