import * as React from "react";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./MainFeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import NukhbaImage from "../../assets/nukhba.jpg";
import SocialButton from "../../components/SocialButton";
import ScrollToTop from "../../components/ScrollToTop";

const mainFeaturedPost = {
  title: "نبذة عن المنظمة",
  description:
    " رابطة النخبة الشبابية منظمة غير حكومية يقودها الشباب تعمل في مجالات الوقاية من التطرف العنيف وبناء السلام والتماسك الاجتماعي ودعم الاستقرار، وتهدف إلى تعزيز التفاهم والسلام في المجتمعات المتأثرة بالتوترات والتطرف. وتعمل عبر تقديم برامج ومشاريع تشمل التثقيف والتوعية، وتعزيز الحوار بين المجموعات المتنوعة، وتقديم الدعم الاجتماعي، وتعزيز الاستدامة والاستقرار في مجتمعات ما بعد النزاع. تسعى المنظمة إلى تقديم حلاً شاملاً للتحديات المرتبطة بالتطرف العنيف وضمان تعايش سلمي وتعزيز المرونة والتماسك المجتمعي، وصولاً الى مجتمعات مستقرة ومرنة.",
  image: NukhbaImage,
  imageText: "Youth Elite Association ",
};

const sidebar = {
  social: [
    { name: "انستغرام", icon: InstagramIcon ,link: "https://instagram.com/eliteyouth.league?igshid=OGQ5ZDc2ODk2ZA==",},
    { name: "فيسبوك", icon: FacebookIcon ,link: "https://www.facebook.com/E.Y.L.NGO?mibextid=LQQJ4d", },
  ],
};

const defaultTheme = createTheme();

export default function Nukhba() {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://bedaia.xyz/api/nukhba");
        const data = await response.json();

        setFeaturedPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(featuredPosts);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <NavBar className="mb-2" />
        <main className="mt-16">
          <div style={{ textAlign: "right" }}>
            <MainFeaturedPost post={mainFeaturedPost} />
          </div>
          <Grid container spacing={4}></Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={featuredPosts} />
            <Sidebar social={sidebar.social} />
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
