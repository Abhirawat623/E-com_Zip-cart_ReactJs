import ReactDom from 'react-dom';

const Loader = ()=>{


    return(
    ReactDom.createPortal(<>
    <div className="loader-main">
<div className="loader"></div>
</div>
</>,
document.getElementById("loader-root"))
    )

}

export default Loader;