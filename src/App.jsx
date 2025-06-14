import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Title from './Components/Title/Title.jsx';
import About from './Components/About/About.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Videoplayer from './Components/Videoplayer/Videoplayer.jsx';
import { useState } from 'react';


function App() {
  const[playState, setPlayState] = useState(false); 

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='container'>
       <Title subtitle='Our Program' title='What we offer'/>
       <Programs/>
       <About setPlayState={setPlayState}/>
       <Title subtitle='Gallery' title='Campus Photos'/>
       <Campus/>
       <Title subtitle='Testimonials' title='What Student Says'/>
       <Testimonials/>
       <Title subtitle='Contact Us' title='Get in touch'/>
       <Contact/>
       <Footer/>
    </div>
    <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default App
