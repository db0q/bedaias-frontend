import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../assets/logob.png'

export default function Footer() {
  return (
    <MDBFooter bgColor='white' className='text-center text-lg-start text-muted '>

      <section className='p-4'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <img src={logo} alt='logo'/>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 hover:text-orange-500 ml-12'>صفحاتنا</h6>
              <p>
                <a href='https://www.facebook.com/E.Y.L.NGO?mibextid=LQQJ4d' target="_blank" rel="noreferrer" className='my-2 text-reset flex justify-center'>
                <FacebookIcon className='hover:text-orange-500' /> <p className='mx-2 hover:text-orange-500'>فيسبوك</p>
                </a>
              </p>
              <p>
                <a href='https://instagram.com/eliteyouth.league?igshid=OGQ5ZDc2ODk2ZA==' target="_blank" rel="noreferrer" className='text-reset my-2 flex justify-center'>
                <InstagramIcon className='hover:text-orange-500'/> <p className='mx-2 hover:text-orange-500'>إنستغرام</p>
                </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className=' mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 ml-8 text-base'>تواصل معنا</h6>
              <p className='hover:text-orange-500'>
                <MDBIcon icon="envelope" className="me-3 " />
                info@bedaia.xyz
              </p>
              <p className='hover:text-orange-300'>
                <MDBIcon icon="phone" className="me-3 my-2 hover:text-orange-500" /> +964 770 945 4916
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          bedaia-iq.org
        </a>
       : © 2023 حقوق النشر
      </div>
      
    </MDBFooter>
  );
}
