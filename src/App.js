
import './App.css';
import NavbarAndHeader from './components/NavbarAndHeader';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Works from './components/Works';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavbarAndHeader />
      <AboutMe />
       <Skills /> 
       <Works />
       <ContactUs />
       <Footer />
    </div>
  );
}

export default App;
