import { motion } from 'framer-motion';
import { styles } from '../styles';
import { bwmap, worldmap } from '../assets';
import { useState, useEffect } from 'react';
import { me } from '../constants'; // assuming 'me' contains the images and descriptions

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === me.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background Maps */}
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>

      {/* Hero Section */}
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        
        {/* Text Area */}
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm {''}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase"
              >
                Ludmila
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Welcome to my portfolio! <br className="sm:block hidden" />
              A Software Engineer and a Data Science / Machine Learning Enthusiast
            </p>
          </div>
        </div>

        <div
  className="absolute right-5 bottom-0 sm:bottom-[20vh] flex flex-col w-[350px] h-[350px] 
  border-2 border-taupe rounded-lg p-4 items-center justify-start space-y-5">
  
  <motion.div
    key={currentImageIndex}
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col items-center"
  >
    {/* Display Image */}
    <img
      src={me[currentImageIndex].image}
      alt={`Diaporama ${currentImageIndex + 1}`}
      className="w-[300px] h-[250px] object-cover rounded-md"
    />

    {/* Description Area */}
    <div className="mt-2 flex flex-col items-start">
      <h3 className="text-xl font-bold text-white"> {/* Changed to white */}
        {me[currentImageIndex].name}
      </h3>
      <p className="text-sm text-gray-300 mt-1"> {/* Changed for clarity */}
        {me[currentImageIndex].description}
      </p>
      {/* Add Tags Below */}
      <div className="flex space-x-2 mt-2">
        {/* Assuming tags are available in the data */}
        {me[currentImageIndex].tags.map((tag, index) => (
          <span key={index} className="text-xs text-gray-400 border border-gray-600 rounded-full px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
</div>


        {/* Scroll indicator */}
        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
              border-french border-dim flex
              justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
