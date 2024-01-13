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
    <Typography variant="h4"  align="right" gutterBottom>
  حول المنصة
</Typography>
<Divider />
<div style={{ textAlign: 'right' }}>
<Markdown className="markdown text-base" >
   منصة مخصصة للوقاية من التطرف العنيف. إنها منصة تجمع بين الجهات المعنية والمنظمات والوكالات الحكومية للتعاون وتبادل المعلومات والموارد للوقاية من التطرف العنيف. الهدف الرئيسي من هذه المنصة هو تعزيز التعاون والتنسيق بين الأطراف المختلفة للمساهمة في منع انتشار التطرف وتعزيز الفهم والسلام في المجتمع. هذه المنصة هي مكان لتبادل الأفكار والممارسات الفعّالة لمنع التطرف العنيف وتعزيز الوعي بأهمية هذا الجهد
</Markdown>
</div>

    </Grid>
  );
}


export default Main;