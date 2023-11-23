import './App.css';
import Navbar from './Components/Navbar/navbar.js'
import Main from './Components/Main/main.js'
import Skill from './Components/Skill/skill.js'
import Portfolio from './Components/Portfolio/portfolio.js'
import Contact from './Components/Contact/contact.js'
import Progress from './Components/Progress/progress.js'
import Footer from './Components/Footer/footer.js'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Skill/>
      <Portfolio/>
      <Progress/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
