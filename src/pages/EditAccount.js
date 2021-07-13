import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import DetailAccount from '../component/AccountControl/DetailAccount';
import ImageAccount from '../component/AccountControl/ImageAccount';


const EditAccount = {
    firstName: 'Minh',
    lastName: 'Bui',
    phone: '84918957387',
    state: 'male',
    email: 'buinhatminh7899gmail.com',
    mssv: 'N17DCCN091',
    avatar: '/static/images/products/lalisa.jpg'
}

const editAccount = () => (
  <>
    <Helmet>
      <title>Account | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <ImageAccount account={EditAccount} />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <DetailAccount account={EditAccount}/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default editAccount;