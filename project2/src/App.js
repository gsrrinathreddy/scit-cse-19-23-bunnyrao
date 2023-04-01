import './App.css';
import INavbar from './components/INavbar';
import { Routes,Route } from 'react-router-dom';
import Skills from './Pages/Skills';
import Aboutme from './Pages/Aboutme';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Qualification from './Pages/Qualification';
function App() {
  return (
    <div className="App">
   
      <INavbar/>
      <Routes>
        <Route path="/Aboutme" element ={<Aboutme/>}/>
        <Route path="/Skills" element ={<Skills/>}/>
        <Route path="/Experience" element ={<Experience/>}/>
        <Route path="/Hobbies" element ={<Hobbies/>}/>
        <Route path="/Qualification" element ={<Qualification/>}/>
      </Routes>
    </div>
  );
}

export default App;