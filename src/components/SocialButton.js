import React, { useState } from 'react';
import { FaRegCommentAlt } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const SocialButton = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleEmailClick = () => {
    const mailtoLink = `mailto:Eya.org@yahoo.com`;
    window.location.href = mailtoLink;
  };

  const handleWhatsappClick = () => {
    // Replace phoneNumber with the desired phone number
    const phoneNumber = '+9647709454916';

    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
  };

  let timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setShowButtons(false);
      setHoveredButton(null); // Reset hovered button on mouse leave
    }, 300); // Adjust the delay as needed
  };

  const handleButtonHover = (type) => {
    setHoveredButton(type);
  };

  const renderMessage = () => {
    switch (hoveredButton) {
      case 'email':
        return 'إرسال بريد إلكتروني';
      case 'whatsapp':
        return 'إرسال رسالة WhatsApp';
      case 'social':
        return 'لنتحدث';
      default:
        return '';
    }
  };

  return (
    <div>
      <div
        id=""
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          bottom: '120px',
          right: '40px',
          cursor: 'pointer',
          boxShadow: '7px 7px 20px #FF9500',
          borderRadius: '40%',
          color: 'blue',
          width: '45px',
          height: '45px',
          textAlign: 'center',
          fontSize: '20px',
          zIndex: '999',
        }}
      >
        <FaRegCommentAlt className='text-orange-500' />
      </div>

      {showButtons && (
        <div
          id='social'
          className="social-buttons"
          style={{
            position: 'fixed',
            bottom: '180px',
            right: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            zIndex: '999',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >

          <button
            onClick={handleEmailClick}
            onMouseEnter={() => handleButtonHover('email')}
            onMouseLeave={() => handleButtonHover(null)}
          >
            <HiOutlineMail className='bg-gray-100 rounded-lg w-12 h-12 hover:text-orange-400' />
          </button>


          <button
            onClick={handleWhatsappClick}
            onMouseEnter={() => handleButtonHover('whatsapp')}
            onMouseLeave={() => handleButtonHover(null)}
          >
            <BsWhatsapp className='bg-gray-100 rounded-lg w-12 h-12 hover:text-orange-400' />
          </button>

        </div>
      )}

      <div
        id="message"
        style={{
          position: 'fixed',
          bottom: '210px',
          height: '30px',
          backgroundColor: 'gray',
          right: '120px',
          color: 'white',
          borderRadius: '8px',
        }}
      >
        {renderMessage()}
      </div>

      <div
        id="progressBar"
        style={{
          width: '0%',
          height: '3px',
          backgroundColor: '#007bff',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '-1',
        }}
      ></div>
    </div>
  );
};

export default SocialButton;
