import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='container'>
       <Title subtitle='Our Program' title='What we offer'/>
       <Programs/>
       <About/>
       <Title subtitle='Gallery' title='Campus Photos'/>
       <Campus/>
    </div>
    </>
  )
}

export default App
