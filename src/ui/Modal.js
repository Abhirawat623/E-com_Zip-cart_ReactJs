import ReactDom from 'react-dom'
import { BackClick } from '../ui/Loader';


const Modal =({onClose})=>{


return(
    ReactDom.createPortal(<>
    {/* passed by props from parent props */}
   <BackClick onClose={onClose}/>
    <div className='modal-container'>
        Modal 
    <button className='close-btn' onClick={onClose}>X</button>
    </div>
    
    </>,
    document.getElementById('modal-root'))
)

}

export default Modal;