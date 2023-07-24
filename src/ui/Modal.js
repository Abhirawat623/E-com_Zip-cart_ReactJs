import ReactDom from 'react-dom'
import { BackClick } from '../ui/Loader';


const Modal =({onClose,children})=>{


return(
    ReactDom.createPortal(<>
    {/* passed by props from parent props */}
   <BackClick onClose={onClose}/>
    <div className='modal-container'>
    <button className='close-btn' onClick={onClose}>X</button>
    <div className='"content'>{children}</div>
    </div>
    
    </>,
    document.getElementById('modal-root'))
)

}

export default Modal;