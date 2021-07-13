import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import TeacherListResults from '../component/Teacher/TeacherListResults';
import TeacherListToolbar from '../component/Teacher/TeacherListToolbar';
import Student from '../data/studentdb';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <TeacherListToolbar />
        <Box sx={{ pt: 3 }}>
          <TeacherListResults customers={Student} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;