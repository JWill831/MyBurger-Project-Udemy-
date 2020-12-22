import Auxilliary from '../../hoc/Auxilliary';
import React from 'react';


const layout=(props)=>(
        <Auxilliary>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main> {props.children}</main>
        </Auxilliary>
        
    
);

export default layout;