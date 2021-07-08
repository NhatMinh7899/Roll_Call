import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import StudentListResults from '../component/StudentListResults';
import StudentListToolbar from '../component/StudentListToolbar';
import Student from '../data/studentdb';

const CustomerList = () => (
  <>
    <Helmet>
      <title>Student</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <StudentListToolbar />
        <Box sx={{ pt: 3 }}>
          <StudentListResults student={Student} />
        </Box>
      </Container>
    </Box>
  </>
);

export default CustomerList;