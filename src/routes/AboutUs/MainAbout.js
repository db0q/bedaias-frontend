import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

function Main() {


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
      <Typography variant="h4" gutterBottom>
      نبذة عن المنصة
      </Typography>
      <Divider />
  
        <Markdown className="markdown text-base" >
        منصة مخصصة للوقاية من التطرف العنيف وهي منصة تقوم بجمع أصحاب المصلحة، والمنظمات، والجهات الحكومية للتعاون وتبادل المعلومات والموارد للوقاية من التطرف العنيف. يتمثل الهدف الرئيسي لهذه المنصة في تعزيز التعاون والتنسيق بين مختلف الجهات للمساهمة في منع انتشار التطرف والترويج للتفاهم والسلام في المجتمع. هذه المنصة تعد مكاناً لتبادل الأفكار والممارسات الفعالة للوقاية من التطرف العنيف وتعزيز الوعي بأهمية هذا الجهد
        </Markdown>

    </Grid>
  );
}


export default Main;