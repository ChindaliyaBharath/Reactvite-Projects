import './App.css';
import Nav from './Components/Navigation/Nav.jsx';
import Contactheader from './Components/Navigation/ContactHeader/COntactheader';
import Contactform from './Components/Navigation/ContactForm/Contactform';


function App() {
 return (
    <div>
    <Nav/>
    <main className='main_container'>
    <Contactheader />
    <Contactform />
    </main>
    </div>
  )
}

export default App
