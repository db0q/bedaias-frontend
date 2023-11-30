import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";

const Main = ()=> {
  const [profileData, setProfileData] = useState([]);
  const [loadedData, setLoadedData] = useState([]);
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    fetchData(limit);
  }, [limit]);
  useEffect(() => {
    setLoadedData(profileData.slice(0, limit));
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
      const response = await fetch(`https://bedaia.xyz/api/nukhba?limit=${limit}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProfileData(data);
    
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
       
      </Typography>
      <Divider />
      {loadedData === null ? 
        <div className="h-96 w-full flex justify-center ">
        <span className="loading text-orange-500 loading-dots loading-xs"></span>
        <span className="loading text-orange-500 loading-dots loading-sm"></span>
        <span className="loading text-orange-500 loading-dots loading-md"></span>
        <span className="loading text-orange-500 loading-dots loading-lg"></span>
      </div>
       : loadedData.slice(-5).map((data) => (
              <Link  to={`/nukhba/${data.slug}`}
              key={data.id}
             >

                <Card sx={{ maxWidth: 745 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="90"
          className="h-32"
          image={ data.firstpic}
          alt={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="line-clamp-3">
          {data.firstdiscription}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="line-clamp-3">
          {new Date(data.created_at).toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric',
                      hour12: true,
                      timeZoneName: 'short',
                    })}
          </Typography>
         
        
        </CardContent>
      </CardActionArea>
    </Card>

              </Link>
            ))}
             <div className="flex justify-center mt-2 align-bottom items-center">
           <button className="right-1/2 border shadow-md w-28 h-12 text-orange-400" onClick={handleButtonOne}> {`1`}</button>
          <button className="right-1/2 border shadow-md w-28 h-12  text-orange-400" onClick={handleButtonTwo}> {`2`}</button>
          <button className="right-1/2 border shadow-md w-28 h-12  text-orange-400" onClick={handleButtonThree}> {`3`}</button>
          <button className="right-1/2 border shadow-md w-28 h-12  text-orange-400" onClick={handleButtonClick}> {`>>`}</button>
          </div>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;