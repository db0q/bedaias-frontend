import React from "react";
import Footer from "../components/Footer";
import Main from "../components/main";
import Navbar from '../components/Navbar';
import ScrollToTop from "../components/ScrollToTop"; 
import SocialButton from "../components/SocialButton";
function Orgs() {
  return (
    <>
      <Navbar />
      <div  className='mt-16'>
      <Main />
      <Footer />
      <SocialButton />
      <ScrollToTop />
      </div>
    </>
  );
}
export default Orgs;