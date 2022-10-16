import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/About/About';
import Services from './components/services/services'
import Resume from './components/resume/Resume'
import { RingLoader} from 'react-spinners';
// import Portfolio from './components/Portfolio/Portfolio'
// import Pricing from './components/pricing/Pricing'
// import Testimonials from './components/testimonials/Testimonials';
// import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact'
import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Skill from './components/Skill/Skill';
// import BackgroundDesign from './components/BackgroundDesign/BackgroundDesign';



function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);



  return (

    
    <>

          {loading ? (
                  <div className="loader">
                  <RingLoader color="#FF4D61" loading size={100} speedMultiplier={1}/>
                  </div>
                ) : (
                  <>
                  {/* <Portfolio/> */}
                      <main className='main'>
                      
                      <Sidebar/>
                        <Home/>
                        <About/>
                        <Services/>
                        <Resume/>
                        <Skill/>
                        
                        {/* <Pricing/> */}
                        {/* <Testimonials/> */}
                        {/* <Blog/> */}
                        <Contact/>

                        <AnimatedCursor
                            color="0,0,0"
                            innerSize={8}
                            outerSize={32}
                            innerScale={1}
                            outerScale={1.7}
                            outerAlpha={0}
                            outerStyle={{ border: '3px solid brown'}}/>

                      </main>
                      {/* <BackgroundDesign/> */}
                      
                      
                      </>
                )}

      
    </>
  );
}

export default App;
