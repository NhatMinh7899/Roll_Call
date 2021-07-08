import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import ClassToolBar from '../component/Class/ClassToolBar';
import ClassCard from '../component/Class/ClassCard';

const manyClass = [
  {
      id: 1,
      media: '/static/images/products/lalisa.jpg',
      title: 'Class PM',
      totalClass: '50'
  },
  {
      id: 2,
      media: '/static/images/products/lalisa.jpg',
      title: 'Class HT',
      totalClass: '50'
  }
]; 

const ClassList = () => (
  <>
    <Helmet>
      <title>Class | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ClassToolBar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {manyClass.map((Class) => (
              <Grid 
                item
                key={Class.id}
                lg={4}
                md={6}
                xs={12}>             
                  <ClassCard Class={Class} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default ClassList;