import './style.css'

const LeftColumn = () =>{
    return (
        <div className='left-column-main-container'>
            <div className="logo-contaier">
                <img src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1676616245/keypad_db9xgv.png" alt="app-logo" className="logo-image"/>
                <h1 className="app-heading">Ready</h1>
            </div>
            <div className="left-column-sub-heading">
                <p className="nav-items">Description</p>
                <div className="qty-container">
                    <p className="nav-items">Qty</p>
                    <p className="nav-items">Amount</p>
                </div>
            </div>
            <div className="middle-container"></div>
            <div className="last-container"></div>
        </div>
    )
}

export default LeftColumn;