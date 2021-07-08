import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import ChartRC from '../component/Dashboard/ChartRC';
import TotalClass from '../component/Dashboard/TotalClass'
import TotalStudent from '../component/Dashboard/TotalStudent'
import TotalTeacher from '../component/Dashboard/TotalTeacher'


const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <TotalClass />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <TotalStudent />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xs={12}
          >
            <TotalTeacher />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={9}
            xs={12}
          >
            <ChartRC />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;