import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavbarAndHeader from './components/NavbarAndHeader';
import AboutMe from './components/AboutMe';
function App() {
  return (
    <div className="App">
      <NavbarAndHeader />
      <AboutMe />
    </div>
  );
}

export default App;
