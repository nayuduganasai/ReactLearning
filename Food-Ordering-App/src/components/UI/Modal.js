import classes from './Modal.module.css';
import {Fragment} from 'react';
import {createPortal} from 'react-dom';


const Backdrop = (props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = (props)=>{
    return <div className={classes.modal}>
                 <div className={classes.content}>{props.children}</div>
           </div>
    
}

const Modal = (props)=>{
    return <Fragment>
        {createPortal(<Backdrop onClose ={props.onClose}></Backdrop>,document.getElementById('overlays'))}
        {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlays'))}
    </Fragment>

}
export default Modal;