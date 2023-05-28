import {Fragment} from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onHideCart}/>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
}

const getPortalElement = document.getElementById('overlays');

const Modal = props => {
// want to use react portal for both the backdrop and render it with react portal
// Create Portal need to know what to portal and where to portal it in the DOM structure.
// Using portals allow for html code to be better strucuted in the final application. 
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, getPortalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, getPortalElement)}
            </Fragment>
};
export default Modal;