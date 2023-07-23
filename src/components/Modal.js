import ReactDom from 'react-dom'

const Modal =({onClose})=>{


return(
    ReactDom.createPortal(<>
    <div className='modal-container'>
        Modal 
        <button className='close-btn' onClick={onClose}>X</button>
    </div>
    </>,
    document.getElementById('modal-root'))
)

}

export default Modal;