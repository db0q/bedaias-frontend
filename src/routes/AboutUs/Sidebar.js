import * as React from 'react';

import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function Sidebar(props) {
  const {  title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6"align="right"  gutterBottom>
          {title}
        </Typography>
        <Typography align="right">
  نينوى/الموصل/حي الشفاء <br />
  كركوك/شارع الاحتفالات<br />
  صلاح الدين/ناحيه الشرگاط
</Typography>

      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
      </Typography>
    </Grid>
  );
}


export default Sidebar;