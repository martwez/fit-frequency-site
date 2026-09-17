import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Offerings from './components/Offerings'
import WeeklyRhythm from './components/WeeklyRhythm'
import Connect from './components/Connect'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Offerings />
        <WeeklyRhythm />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

export default App
