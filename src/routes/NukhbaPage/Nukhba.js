import * as React from 'react';
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from '../../components/Footer';
import NavBar from '../../components/Navbar';
import NukhbaImage from '../../assets/nukhba.jpg'
import SocialButton from '../../components/SocialButton';
import ScrollToTop from '../../components/ScrollToTop';


const mainFeaturedPost = {
  title: 'نبذة عن المنظمة',
  description:
    "رابطة النخبة الشبابية منظمة غير حكومية يقودها الشباب تعمل في مجالات الوقاية من التطرف العنيف وبناء السلام والتماسك الاجتماعي ودعم الاستقرار، وتهدف إلى تعزيز التفاهم والسلام في المجتمعات المتأثرة بالتوترات والتطرف. وتعمل عبر تقديم برامج ومشاريع تشمل التثقيف والتوعية، وتعزيز الحوار بين المجموعات المتنوعة، وتقديم الدعم الاجتماعي، وتعزيز الاستدامة والاستقرار في مجتمعات ما بعد النزاع. تسعى المنظمة إلى تقديم حلاً شاملاً للتحديات المرتبطة بالتطرف العنيف وضمان تعايش سلمي وتعزيز المرونة والتماسك المجتمعي، وصولاً الى مجتمعات مستقرة ومرنة.    ",
  image: NukhbaImage,
  imageText: 'رابطة النخبة الشبابية',
  linkText: '',
};

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
// ];

// const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Nukhba() {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bedaia.xyz/api/nukhba');
        const data = await response.json();
        
        setFeaturedPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(featuredPosts)
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
     <NavBar className='mb-2'/>
        <main className='mt-16'>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>

          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={featuredPosts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <SocialButton />
      <ScrollToTop />
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
