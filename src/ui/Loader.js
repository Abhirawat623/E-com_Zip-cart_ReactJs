import ReactDom from 'react-dom';

export const BackClick=(props)=>{

const handleLayer=()=>{
    if(props.onClose){
        props.onClose();
    }}

return(
    <div onClick={handleLayer} className="layout"></div>
)
}

const Loader = ()=>{


    return(
    ReactDom.createPortal(<>
    <breakDrop />
   
<div className="loader"></div>

</>,
document.getElementById("loader-root"))
    )

}

export default Loader;