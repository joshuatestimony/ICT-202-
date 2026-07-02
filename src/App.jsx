import './App.css'
import './components/Hero.css'
import Navbar from './components/Navbar.jsx'
import Skills from './components/Skills.jsx'
import Hero from './components/Hero.jsx'

function App() {
  return (
    <>
       <Navbar name='Glory' />
        <Hero
         name="Joshua Testimony"
            title="UIUX Designer/Video Cenematographer"
            bio="I'm an aspiring UIUXdesigner that designs mobile and desktop applications for different website. I'm currently on a learning journey — developing my skills in user research, uiux design, and vedio development. I'm eager to build beautiful, responsive web experiences that is user friendly and develop a uiux deisn for different company."
        />
          <Skills />

    </>
  )
}

export default App
