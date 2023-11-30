import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/main.css";

const Main = () => {
  const [profileData, setProfileData] = useState([]);
  const [loadedData, setLoadedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5);
  useEffect(() => {
    fetchData(limit);
  }, [limit]);
  useEffect(() => {
    setLoadedData(profileData.slice(0, limit));
    setLoading(false)
  }, [profileData, limit]);

  const handleButtonClick = () => {
    setLimit(limit + 3);
  };
  const handleButtonOne = () => {
    setLimit(3);
  };
  
  const handleButtonTwo = () => {
    setLimit(6);
  };
  
  const handleButtonThree = () => {
    setLimit(9);
  };
  const fetchData = async (limit) => {
    try {
      const response = await fetch(`https://bedaias-8e5033cdd4f3.herokuapp.com/api/bedaia?limit=${limit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProfileData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (loading) {
    return (
      <div className="h-96 w-full flex justify-center ">
        <span className="loading text-orange-500 loading-dots loading-xs"></span>
        <span className="loading text-orange-500 loading-dots loading-sm"></span>
        <span className="loading text-orange-500 loading-dots loading-md"></span>
        <span className="loading text-orange-500 loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-16 pt-4">
        <div className="">

        </div>

        <div className="">
          <div className="m-4 grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-4">
            {loadedData.slice(-3).map((data) => (
              <Link  to={`/orgs/${data.slug}`}
              key={data.id}
             >

                <Card sx={{ maxWidth: 745 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="90"
          className="h-32"
          image={data.firstpic}
          alt={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="line-clamp-3">
          {data.firstdiscription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

              </Link>
            ))}
           
        </div>
        <div className="flex justify-center mt-2 align-bottom items-center">
           <button className="right-1/2 border shadow-md w-28 h-12 text-orange-400" onClick={handleButtonOne}> {`1`}</button>
          <button className="right-1/2 border shadow-md w-28 h-12  text-orange-400" onClick={handleButtonTwo}> {`2`}</button>
          <button className="right-1/2 border shadow-md w-28 h-12  text-orange-400" onClick={handleButtonThree}> {`3`}</button>
          <button className="right-1/2 border shadow-md w-28 h-12  text-orange-400" onClick={handleButtonClick}> {`>>`}</button>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 mt-6">
        
      </div>
    </div>
  );
};

export default Main;
