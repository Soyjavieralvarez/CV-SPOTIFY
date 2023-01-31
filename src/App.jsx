import './App.css';

import Hero from './components/00Hero/Hero'
import Experience from './components/01Experience/Experience';
import Education from './components/02Education/Education';
import Portfolio from './components/03Portfolio/Portfolio';
import Skills from './components/04Skills/Skills';
import About from './components/05About/About';
import Contact from './components/06Contact/Contact'
import Nav from './components/07Nav/Nav'
import Habilities from './components/008Habilities/Habilities'
import CardBottom from './components/CardBottom/CardBottom'
import { CV } from './CV/CV';

const { hero, nav, skills, about, education, experience, portfolio, habilities, contact, } = CV

function App() {
  return (
    <div className="App">
      <Hero hero={hero}/>
      <Skills />
      <Education education={education}/>
      <Experience experience={experience}/>
      <Portfolio portfolio={portfolio}/>
      <Habilities habilities={habilities} />
      {/* <About about={about}/>  */}
      <Contact contact={contact}/>
      <CardBottom />
    </div>
  );
}

export default App;
