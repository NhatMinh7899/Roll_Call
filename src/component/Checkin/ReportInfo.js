import {
  Box,
  Container,
  Grid,
  Avatar,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import QR from './QR'
import ClassInfo from './ClassInfo';
const ReportInfo = ({info, classInfo}) => (
  <Box>
    <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
          <ClassInfo info={info} classInfo={classInfo}/>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
          <QR qrUrl={info.qrUrl}/>
          </Grid>
          
      </Grid>
    </Container>
  </Box>
);

export default ReportInfo;
