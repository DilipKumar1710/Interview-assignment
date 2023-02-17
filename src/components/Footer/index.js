import './style.css';

const Footer = () =>{
    return(
        <>
        <div className="footer-container">
        <button className="footer-btns">Print Check</button>
        <button className="footer-btns">Help</button>
        <button className="footer-btns">Recall</button>
        <button className="footer-btns">Reprint</button>
        <button className="footer-btns">Tanks</button>
        <button className="footer-btns">Fuel Price</button>
        <button className="footer-btns">Show Fuel</button>
        <button className="footer-btns">CSR Func</button>
    </div>
    <div className="img-container">
    <p class="keypad-heading">Numeric Keypad</p>
            <div class="keyboard">
                <button class="num-btns">7</button>
                <button class="num-btns">8</button>
                <button class="num-btns">9</button>
                <button class="num-btns">4</button>
                <button class="num-btns">5</button>
                <button class="num-btns">6</button>
                <button class="num-btns">1</button>
                <button class="num-btns">2</button>
                <button class="num-btns">3</button>
            </div>
            <div class='zeros-container'>
                <button class="num-btns">0</button>
                <button class="num-btns">00</button>
            </div>
            <div class="seperate-btns">
                <button class="operations-btns">ABC /<br />SHIFT</button>
                <button class="operations-btns">Clear</button>
                <button class="operations-btns">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg> 
                </button>
            </div>
    </div>
    </>
        
    )
}

export default Footer;