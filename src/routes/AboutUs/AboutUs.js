import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "./MainFeaturedPost";
import Main from "./MainAbout.js";
import Sidebar from "./Sidebar";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import logo from "../../assets/logob.png";
import SocialButton from "../../components/SocialButton";
import ScrollToTopButton from "../../components/ScrollToTop";
const mainFeaturedPost = {
  title: "حول المنصة",
  description:
    "منصة مخصصة للوقاية من التطرف العنيف. إنها منصة تجمع بين الجهات المعنية والمنظمات والوكالات الحكومية للتعاون وتبادل المعلومات والموارد للوقاية من التطرف العنيف.",
  image: logo,
  imageText: "وصف الصورة الرئيسية",
};

const sidebar = {
  title: "مكاتب المنظمة",
  social: [
    {
      name: "Instagram",
      icon: InstagramIcon,
      link: "https://instagram.com/eliteyouth.league?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      link: "https://www.facebook.com/E.Y.L.NGO?mibextid=LQQJ4d",
    },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AboutUS() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <NavBar className="mb-2" />
        <main className="mt-16">
          <div style={{ textAlign: "right" }}>
            <MainFeaturedPost post={mainFeaturedPost} />
          </div>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main />
            <Sidebar title={sidebar.title} social={sidebar.social} />
          </Grid>
        </main>
      </Container>
      <SocialButton />
      <ScrollToTopButton />
      <Footer />
    </ThemeProvider>
  );
}
