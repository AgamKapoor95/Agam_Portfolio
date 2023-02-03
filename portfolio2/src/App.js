import logo from './logo.svg';
import './App.css';
import { About } from './about/About';
import { Header } from './header/Header';
import { Navbar } from './navbar/Navbar';
import { Skills } from './skills/Skills';
import { Projects } from './projects/Projects';
import { Contact } from './contact/Contact';

function App() {
  return (
   <>
    <Header/>
   <Navbar/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
