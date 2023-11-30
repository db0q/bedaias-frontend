import React, { useState, useEffect } from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai'

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <div
          id="scrollToTop"
          onClick={scrollToTop}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            bottom: '40px',
            right: '30px',
            cursor: 'pointer',
            border: '2px solid  #FF9500',
            borderRadius: '50%',
            color:"blue" ,
            width: '50px',
            height: '50px',
            textAlign: 'center',
            fontSize: '20px',
          }}
        >
          <AiOutlineArrowUp className='text-orange-500'/>
        </div>
      )}
      <div
        id="progressBar"
        style={{
          width: '0%',
          height: '3px',
          backgroundColor: '#FF9500',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '-1',
        }}
      ></div>
    </div>
  );
};

export default ScrollToTopButton;
