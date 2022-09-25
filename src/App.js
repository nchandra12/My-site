import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/Home';
import About from './components/about/about';
import Services from './components/services/services'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/portfolio'
import Pricing from './components/pricing/Pricing'
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact'

import AnimatedCursor from "react-animated-cursor";



function App() {
  return (
    <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonials/>
        <Blog/>
        <Contact/>

        <AnimatedCursor
  color="0,0,0"
  innerSize={8}
  outerSize={32}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid pink'
  }}
/>

      </main>
    </>
  );
}

export default App;
