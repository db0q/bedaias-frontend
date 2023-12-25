import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SocialButton from "../../components/SocialButton";
import ScrollToTop from "../../components/ScrollToTop";
import DestnationData from "../../components/DestnationData";
import styles from "../../styles/Destnationstyle.module.css";
import Typography from "@mui/material/Typography";
const Nukhbapost = () => {
  const { id } = useParams();
  const [profileInfo, setProfileInfo] = useState(null);

  useEffect(() => {
    fetch(`http://bedaia.xyz/api/nukhba/${id}`)
      .then((response) => response.json())
      .then((data) => setProfileInfo(data))
      .catch((error) => console.error("Error:", error));
  }, [id]);
  console.log(profileInfo);

  if (!profileInfo) {
    return (
      <>
        <Navbar />
        <div className="h-96 w-full flex justify-center ">
          <span className="loading text-orange-500 loading-dots loading-xs"></span>
          <span className="loading text-orange-500 loading-dots loading-sm"></span>
          <span className="loading text-orange-500 loading-dots loading-md"></span>
          <span className="loading text-orange-500 loading-dots loading-lg"></span>
        </div>
        <Footer />
        <SocialButton />
        <ScrollToTop />
      </>
    );
  }
  const formattedDate = new Date(profileInfo.created_at).toLocaleString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }
  );
  return (
    <div>
      <Navbar />
      <div className="mt-16 pt-4">
        <div className={styles.destnation}>
          <h1>{profileInfo.title}</h1>
          <p></p>
          <DestnationData
            cName={styles.firstDes}
            heading=""
            text={profileInfo.firstdiscription}
            img1={profileInfo.firstpic}
            img2={profileInfo.secondpic}
          />
          <DestnationData
            cName={styles.firstDesReverse}
            heading=""
            text={profileInfo.seconddiscription}
            img1={profileInfo.thirdpic}
            img2={profileInfo.forthpic}
          />
          <div class="flex items-center justify-center h-screen">
            <video class="max-w-full max-h-full" controls>
              <source src={profileInfo.video_file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <Typography
          variant="body2"
          color="text.secondary"
          className="flex justify-center "
        >
          created at : {formattedDate}
        </Typography>
      </div>

      <Footer />
      <SocialButton />
      <ScrollToTop />
    </div>
  );
};

export default Nukhbapost;
