import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Education,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import Certification from './components/Certification';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] ">
            <Experience />
          </div>
        </div>

        <div
          className="bg-education bg-cover bg-center bg-no-repeat">
            <Education />
        </div>


        <div
          className="bg-certification bg-cover bg-center bg-no-repeat 
             rounded-br-[150px]">
              <div
            className="bg-certificationLight bg-cover bg-center 
            bg-no-repeat rounded-br-[150px] ">
              <Certification />
          </div>
          
        </div>

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
