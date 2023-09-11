import React from 'react'
import { createPortal } from 'react-dom'


const DeleteModal = (props) => {

    const { onDelete, isVisible, title } = props;

    if(!isVisible){
        return ''
    }

    return createPortal(
        <div>
            <p>Are you sure you want to delete {title}</p>
            <button onClick={isVisible}>Cancel</button>
            <button onClick={onDelete}>Delete</button>
        </div>, document.body
    )
}

export default DeleteModal;
