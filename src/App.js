import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavbarAndHeader from './components/NavbarAndHeader';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Works from './components/Works';
function App() {
  return (
    <div className="App">
      <NavbarAndHeader />
      <AboutMe />
       <Skills /> 
       <Works />
    </div>
  );
}

export default App;
