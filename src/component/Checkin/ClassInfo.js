import {
    Box,
    Container,
    Grid,
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Divider,
    CardMedia,
    TextField,
    Typography
  } from '@material-ui/core';
  import { Search as SearchIcon } from 'react-feather';
  
  const ClassInfo = ({info, classInfo}) => 
  (
    <Card>
        <CardHeader  title="Thông Tin Lớp Học:"/>
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
            <Typography
            color="textPrimary"
            gutterBottom
            variant="h3">
            Tên Lớp: {classInfo.class_name}
            </Typography>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
            <Typography
            color="textPrimary"
            gutterBottom
            variant="h3">
            Mã Lớp:   {info.subject}
            </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <Typography
            color="textPrimary"
            gutterBottom
            variant="h4">
            Giảng Viên: {classInfo.teacher_name}
            </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <Typography
            color="textPrimary"
            gutterBottom
            variant="h4">
            Mã Giảng Viên: {classInfo.teacher_id}
            </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <Typography
            color="textPrimary"
            gutterBottom
            variant="h4">
            Số Lượng Sinh Viên: {classInfo.student_count}
            </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <Typography
            color="textPrimary"
            gutterBottom
            variant="h4">
            Kết Thúc Điểm Danh Lúc: {info.expired}
            </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
        </Box>
      </Card>
  );
  
  export default ClassInfo;
  