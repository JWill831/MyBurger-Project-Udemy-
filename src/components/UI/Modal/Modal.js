import React from 'react';
import classes from '../Modal/Modal.module.css';
import Auxillary from '../../../hoc/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return (
        <Auxillary>
            <Backdrop clicked={props.modalClosed} show={props.show}/>
                <div className={classes.Modal}
                    style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opcaity: props.show ? '1' : '0'
                    }}
                >
                    {props.children}
                </div>
        </Auxillary>
    );
};

export default Modal;
