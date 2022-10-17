import React from "react";
import ReactDOM from "react-dom";


const Modal = ({title,content,actions}) => {
    return ( ReactDOM.createPortal(
        <div className="ui visible modals active dimmer">
            <div className="ui standard modal visible active">
                <div className="header">
                   {title}
                </div>
                <div className="content">
                    {content}
                </div>
                <div className="actions">
                {actions}
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    ) );
}
 
export default Modal;