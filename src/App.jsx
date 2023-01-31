import './App.css';
import About from './components/About/About';
import Nav from './components/Nav/Nav'
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'
import { CV } from './CV/CV';

const { hero, about, education, experience, portfolio, contact, } = CV

function App() {
  return (
    <div className="App">
      <Hero hero={hero}/>
      <Nav />
      <About about={about}/> 
      <Education education={education}/>
      <Experience experience={experience}/>
      <Portfolio portfolio={portfolio}/>
      <Contact contact={contact}/>
    </div>
  );
}

export default App;
