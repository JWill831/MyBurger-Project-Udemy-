import Auxilliary from '../../hoc/Auxilliary';
import React from 'react';
import classes from '../Layout/Layout.module.css'


const Layout=(props)=>(
        <Auxilliary>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}> {props.children}</main>
        </Auxilliary>
        
    
);

export default Layout;