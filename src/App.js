import './style.css';
import LeftColumn from "./components/LeftColumn";
import RightColumn from './components/RightColumn';
import Footer from './components/Footer';

const App = () =>{
  return(
    <>
    <div className="container">
      <LeftColumn/>
      <RightColumn/>
    </div>
    <Footer/>
    </>
    
  )
}

export default App;